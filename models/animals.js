//import our db connection
const mongoose=require('mongoose')
// import Schema (explaination)
const Schema = mongoose.Schema

// create a tweet schema
const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
},{timestamps: true})

// create Tweet model
const Animal = mongoose.model('animals', animalSchema);
module.exports = Animal;
