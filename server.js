// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const registerRouters = require("./utils/routers.js")
const session = require("express-session")
const MongoStore = require("connect-mongo")


// create app object
const app = express()

// Middleware
app.use(express.static("public")) // serve files from public folder
app.use(morgan("dev")); //logger
app.use(methodOverride("_method")); // override form submissions
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false
  }))

// get env variables
const PORT = process.env.PORT

// routers
registerRouters(app)


// routes
app.get("/", (req, res) => {
    res.render("user/landing.ejs")
})

// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})