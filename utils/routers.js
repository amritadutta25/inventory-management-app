const productController = require("../controllers/product.js")
const userController = require("../controllers/user.js")

function registerRouters(app) {
    // routers
    app.use("/products", productController)
    app.use("/user", userController)
}

module.exports = registerRouters