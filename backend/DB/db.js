const mongoose = require("mongoose")
const connection=async ()=>{
    try {
        await mongoose
        .connect("mongodb+srv://ineslahbib7:6ELC1FV3M6HdOJRT@cluster0.dy7qxkq.mongodb.net/")
       
        console.log("database is connect")
    } catch (error) {
        console.log(`Could not connect to MongoDB: ${error.message}`)
    }
}
module.exports= connection  