// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const registerRouters = require("./utils/routers.js")


// create app object
const app = express()

// Middleware
app.use(express.static("public")) // serve files from public folder

// get env variables
const PORT = process.env.PORT

// routers
registerRouters(app)


// routes
app.get("/", (req, res) => {
    res.send("It's Working...")
})

// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})