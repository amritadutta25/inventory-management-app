// Import dependencies
const express = require("express") // import express
const Product = require("../models/product.js") // import 'Product' model

const router = express.Router() // create router


// Middleware - to check if user is logged in, only then make the 'product' routes accesible
router.use((req, res, next) => {
    console.table(req.session) // req.session is not part of express, we created session middleware in server.js
  
    if (req.session.loggedIn) {
      next()
    } else {
      res.redirect("/user/login")
    }
})

// INDEX route -> GET request to /products
router.get("/", async (req, res) => {
    try {
        // get username from req.session
        const username = req.session.username
        // get all products for the user only
        const products = await Product.find({username})

        res.render("products/index.ejs", {products})

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
    
})

// NEW Route -> Get request to /products/new
router.get("/new", (req, res) => {
    res.render("products/new.ejs")
})

// CREATE Route -> Post request to /products
router.post("/", async (req, res) => {
    try {
        // adding user to req.body from req.session, this will be used in index route to get products belonging to only a particular user
        req.body.username = req.session.username

        // create the product in the database
        await Product.create(req.body);
        // redirect back to main page
        res.redirect("/products");

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
})

// EDIT Route -> get request to /products/:id/edit
router.get("/:id/edit", async (req, res) => {
    try {
        // product id to be edited
        const id = req.params.id

        const product = await Product.findById(id)

        res.render("products/edit.ejs", {product})

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
})

// UPDATE route -> put request to /products/:id
router.put("/:id", async (req, res) => {
    try {
        // get the id of the product to be updated
        const id = req.params.id

        // update the product
        await Product.findByIdAndUpdate(id, req.body)

        // redirect to show page of the product
        res.redirect(`/products/${id}`);

    } catch (error) {
        console.log("-----", error.message, "------");
        res.status(400).send("error, read logs for details");
    }
})


// DELETE route - delete request to /products/:id
router.delete("/:id", async (req, res) => {
    try {
        // get the id
        const id = req.params.id
        // delete the product
        await Product.findByIdAndDelete(id)
        // redirect to main page
        res.redirect("/products")
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