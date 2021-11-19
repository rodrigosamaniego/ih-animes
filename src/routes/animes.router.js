const express = require ('express')
const router = express.Router()

const animeController = require('./../controllers/animes.controller')
//Routes
//obtener los animes o mostrar en pantalla
router.get('/',animeController.getAnimes)
router.put('/ :id/update', animeController.putAnimes)

module.exports = router