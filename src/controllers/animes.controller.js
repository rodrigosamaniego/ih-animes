const Anime = require('./../models/Anime')
const anime = require('./../models/Anime')

const getAnimes = async(req, res) => {
    const animes = await Anime.find({})
    res.render('allAnimes', {animes})
}
const putAnimes = async(req, res) =>{
    //Parámetrós de la url
    const {id} = req.params
    // Datos del formulario body-parser
    const{ img } = req.body
    

     await Anime.findByIdAndUpdate(id, {img}, {new: true})
    res.redirect('/animes')
}


module.exports = {getAnimes, putAnimes}