// Import the required libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');  // Import your Express app
const Item = require('../model/items');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Items", () => {
    // Sample item for use in tests
    const sampleItem = new Item({
        name: "Test Item",
        description: "This is a test item",
        price: 99,
        image: "https://example.com/test.jpg"
    });

    before(async function() {
        // Save the sample item to the database before the tests run
        await sampleItem.save();
    });

    after(async function() {
        // Delete the sample item from the database after the tests run
        await Item.findByIdAndRemove(sampleItem._id);
    });

    // Test getting all items
    describe("GET /", () => {
        it("should get all items", (done) => {
            chai.request(server)
                .get('/items')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    // Test getting a single item
    describe("GET /:id", () => {
        it("should get a single item", (done) => {
            chai.request(server)
                .get('/items/' + sampleItem._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    // Test adding a new item
    describe("POST /", () => {
        it("should add a new item and then delete it", (done) => {
            chai.request(server)
                .post('/items')
                .send({
                    name: "Test Item 2",
                    description: "This is another test item",
                    price: 49,
                    image: "https://example.com/test2.jpg"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');

                    // Delete the item that was just added
                    Item.findByIdAndRemove(res.body._id).then(() => done());
                });
        });
    });

    // Test updating an item
    describe("PUT /:id", () => {
        it("should update an existing item", (done) => {
            chai.request(server)
                .put('/items/' + sampleItem._id)
                .send({ price: 79 })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.price.should.equal(79);
                    done();
                });
        });
    });

    // Test deleting an item
    describe("DELETE /:id", () => {
        it("should add a new item and then delete it", (done) => {
            const itemToDelete = new Item({
                name: "Test Item 3",
                description: "This item will be deleted",
                price: 19,
                image: "https://example.com/test3.jpg"
            });
            itemToDelete.save().then(() => {
                chai.request(server)
                    .delete('/items/' + itemToDelete._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});
