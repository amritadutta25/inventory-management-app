// Import dependencies
const express = require("express") // import express
const User = require("../models/user.js") // import 'User' model
const bcrypt = require("bcrypt")

const router = express.Router() // create router


// Routes

// Signup Page Route (get request to /user/signup -> form)
router.get("/signup", (req, res) => {
  res.render("user/signup.ejs")
})

// Signup Submit Route (post request to /user/signup -> create the user)
router.post("/signup", async (req, res) => {
  try {
    // encrypt the password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    )

    console.log("Hashed Password:", req.body.password)

    //create the user
    await User.create(req.body)
    
    // saving loggedIn as true so that we can redirect to /products route after signup since /products (Index route) needs user to be loggedIn to access it.
    req.session.loggedIn = true

    //redirect user to homepage
    res.redirect("/products")
  } catch (error) {
    console.log("-----", error.message, "------")
    res.status(400).send("error, read logs for details")
  }
})

// Login page Route (get -> /user/login -> form)
router.get("/login", (req, res) => {
  res.render("user/login.ejs")
})

// Login submit route (post -> /user/login -> login the user)
router.post("/login", async (req, res) => {
  try {
    // get the username and password from req.body
    const { username, password } = req.body
    // search the database for the user
    const user = await User.findOne({ username })
    // check if the user exists
    if (!user) {
      throw new Error("User Error: User Doesn't Exist")
    }
    // check if the password matches
    const result = await bcrypt.compare(password, user.password)
    // check the result of the match
    if(!result){
        throw new Error("User Error: Password Doesn't Match")
    }

    // save that the user is logged in into req.session
    req.session.username = username
    req.session.loggedIn = true

    // redirect to home page
    res.redirect("/products")
  } catch (error) {
    console.log("-----", error.message, "------")
    res.status(400).send("error, read logs for details")
  }
})

// Logout Route (destroy the session)
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/")
  })
})

// export router
module.exports = router
