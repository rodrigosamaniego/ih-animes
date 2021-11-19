
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema
const animeSchema = new Schema({
    name: String,
    description: String,
    Rating: String,
    episode: Number,
    categorie: String,
    studio: String,
    img: String,
}, {timestamps: true})

//Modelo
const Anime = mongoose.model('Anime', animeSchema)

//Export
module.exports = Anime