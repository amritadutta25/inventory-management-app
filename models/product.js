// Import Dependencies and Connection
/////////////////////////////////
const mongoose = require("./connection.js")

/////////////////////////////////////////
// Create Product Model
/////////////////////////////////////////
// destructure Schema and model into their own variables
const { Schema, model } = mongoose
// same as :
// const Schema = mongoose.Schema
// const model = mongoose.model

// Schema - Shape of the Data
const productSchema = new Schema({
    productId: String,
    name: String,
    categoryId: String,
    price: Number,
    description: String,
    stockQuantity: Number,
    image: String
})

// Model - object for interacting with the database
const Product = model("Product", productSchema)

//////////////////////////////////
// export the model
/////////////////////////////////
module.exports = Product