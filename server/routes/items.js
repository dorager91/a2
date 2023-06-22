var express = require('express');

const router = express.Router();

const items = [
    {
        "id": 1,
        "name": "Banana",
        "description": "This is the sweetest banana you can get!",
        "price": 10,
        "image": "https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-PNG-Image.png"
    },
    {
        "id": 2,
        "name": "Peach",
        "description": "This is the cutest peach you can get!",
        "price": 6,
        "image": "data:image/jpeg;base64,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"
    }
];


router.get('/', (req, res) => {
    res.send(items);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
        res.send(item);
    } else {
        res.status(404).send({error: "Item not found"});
    }
});


router.post('/', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length ? Math.max(...items.map(item => item.id)) + 1 : 1;
    if (!(typeof newItem.name === 'string' && typeof newItem.price === 'number')) {
        res.status(400).send({error: "Invalid item data"});
        return;
    }
    items.push(newItem);
    res.send(newItem);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = items.findIndex(item => item.id === id);
    if(index === -1) {
        res.status(404).send({error: "Item not found"});
    } else {
        const deletedItem = items.splice(index, 1);
        res.send(deletedItem);
    }
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = items.findIndex(item => item.id === id);
    if(index === -1) {
        res.status(404).send({error: "Item not found"});
    } else {
        const updatedItem = {...items[index], ...req.body};
        if(!(typeof updatedItem.name === 'string' && typeof updatedItem.price === 'number')){
            res.status(400).send({error: "Invalid item data"});
            return;
        }
        items[index] = updatedItem;
        res.send(updatedItem);
    }
});

module.exports = router;