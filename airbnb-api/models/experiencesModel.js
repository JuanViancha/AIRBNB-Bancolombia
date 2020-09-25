const mongoose = require('mongoose')
const {Schema} = mongoose

const experienceSchema = new Schema({    
    image: String,
    title: String,
    description: String,
    place: String,
    score: Number,
    users: Number
})

const  experienceModel = mongoose.model('experiences', experienceSchema)

module.exports = experienceModel