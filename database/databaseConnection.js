const mongoose = require("mongoose")


async function connectToDb(){
   await mongoose.connect("mongodb+srv://anita:<password>@cluster0.qoeszqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Database connected")
}

module.exports = connectToDb