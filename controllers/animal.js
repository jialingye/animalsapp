const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();

// import the Tweet model
const Animal = require('../models/animals')
const animalSeed = require('../db/animalSeed')

// async / await (explaination)
// Create
router.post('/', async (req, res) => {

    const animal = await Animal.create(req.body)
    // then do this thing
    res.redirect('/animals')
});

// Index
router.get('/', async (req, res) => {
    const animals = await Animal.find({})
    res.send(animals);
});

// Seed(explaination) 
router.get('/seed', async (req, res) => {
    await Animal.deleteMany({})
    await Animal.create(animalSeed)
    res.redirect('/animal');
});

// Show
router.get('/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id)
    res.send(animal);
});

// Delete
router.delete('/:id', async (req, res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id)
    res.send({success: true, animal});
});

// Update
router.put('/:id', async (req, res) => {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.send(animal);
});

module.exports = router;
