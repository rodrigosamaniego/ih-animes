const { Console } = require('console')
const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB)
    Console.log("data base connected")
}

module.export = connectDB