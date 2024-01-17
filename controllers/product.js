// Import dependencies
const express = require("express") // import express
const seed = require("../models/seed.js") // import seed data
const Product = require("../models/product.js") // import 'Product' model

const router = express.Router() // import router


// INDEX route -> GET request to /products
router.get("/", async (req, res) => {
    try {
        // get all products
        const products = await Product.find()

        res.render("products/index.ejs", {products})

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
    
})

// SHOW route -> GET request to /products/:id
router.get("/:id", async (req, res) => {
    try {
        // get the product using id
        const id = req.params.id
        const product = await Product.findById(id)

        res.render("products/show.ejs", {product})

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
})











// export router
module.exports = router