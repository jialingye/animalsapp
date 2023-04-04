const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();

// import the Tweet model
const Animal = require('../models/animals')
const animalSeed = require('../db/animalSeed')

// async / await (explaination)
// Create
router.post('/', async (req, res) => {
    req.body.extinct=req.body.extinct==="on"? true:false;
    const animal = await Animal.create(req.body)
    // then do this thing
    res.redirect('/animals')
});

// Index
router.get('/', async (req, res) => {
    const animals = await Animal.find({})
    res.render('index.ejs',{animals});
});

// Seed(explaination) 
router.get('/seed', async (req, res) => {
    await Animal.deleteMany({})
    await Animal.create(animalSeed)
    res.redirect('/animals');
});

// New
router.get('/new',(req,res)=>{
    res.render('new.ejs')
})

// Show
router.get('/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id)
    res.render('show.ejs',{animal});
});

// Edit
router.get('/:id/edit', async(req,res)=>{
    const animal = await Animal.findById(req.params.id)
    res.render('edit.ejs',{animal})
})

// Delete
router.delete('/:id', async (req, res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id)
    res.redirect('/animals')
});

// Update
router.put('/:id', async (req, res) => {
    req.body.extinct=req.body.extinct==="on"? true:false;
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.redirect('/animals');
});

module.exports = router;
