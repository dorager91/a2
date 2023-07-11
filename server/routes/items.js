var express = require('express');
var router = express.Router();
const Item = require('../model/items');

router.get('/', async (req, res) => {
    let filteredItems;
    const { search, price, sort } = req.query;
    try {
        filteredItems = await Item.find();
        if (search) {
            // Filter by search name
            filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (price) {
            // Filter by price
            filteredItems = filteredItems.filter(item => item.price === Number(price));
        }
        if (sort) {
            // Sort by either 'asc' or 'desc'
            filteredItems.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);
        }
        res.send(filteredItems);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Item.findById(id);
        if (item) {
            res.send(item);
        } else {
            res.status(404).send({error: "Item not found"});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    try {
        const saved = await newItem.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedItem = await Item.findByIdAndRemove(id);
        if(deletedItem) {
            res.status(200).json(deletedItem);
        } else {
            res.status(404).send({error: "Item not found"});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, {new: true});
        if(updatedItem) {
            res.status(200).json(updatedItem);
        } else {
            res.status(404).send({error: "Item not found"});
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;
