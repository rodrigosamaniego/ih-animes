const { Console } = require('console')
const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB)
    console.log("data base connected")
}

module.exports = connectDB