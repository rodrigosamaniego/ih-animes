//Importaciones
const express = require('express')
const { connect } = require('http2')
const app = express()

require('dotenv').config()
const path = require("path")

const connectDB= require("./config/db")
//Middlewares

app.use(express.static(path.join(__dirname, "public")))

//configuración
app.set('views', path.join(__dirname, "views") )
app.set('view engine', 'hbs')

connectDB()

//routes
//home
app.get('/', (req, res) =>{
    res.render('index')
})



//Server
app.listen(process.env.PORT, () => {
    console.log( `Server on port ${process.env.PORT} `)
})
