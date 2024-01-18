const seedProducts = [
    {
        productId: 1,
        name: "BILLY Bookcase",
        category: "Bookcases & Shelving Units",
        price: 59.99,
        description: "A simple and versatile bookcase with adjustable shelves.",
        stockQuantity: 100,
        image: "https://www.ikea.com/in/en/images/products/billy-bookcase-oak-effect__1097086_pe864714_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 2,
        name: "KLIPPAN Loveseat",
        category: "Sofas & Armchairs",
        price: 249.99,
        description: "Compact and comfortable two-seat sofa, perfect for small spaces.",
        stockQuantity: 0,
        image: "https://www.ikea.com/in/en/images/products/klippan-2-seat-sofa-bomstad-black__0562963_pe663653_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 3,
        name: "MALM Bed Frame",
        category: "Beds",
        price: 199.99,
        description: "A sleek, minimalist bed frame with ample under-bed storage.",
        stockQuantity: 75,
        image: "https://www.ikea.com/in/en/images/products/malm-bed-frame-high-w-4-storage-boxes-white-stained-oak-veneer-loenset__1154398_pe886037_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 4,
        name: "POÄNG Armchair",
        category: "Sofas & Armchairs",
        price: 79.99,
        description: "A classic armchair with a unique design and exceptional comfort.",
        stockQuantity: 80,
        image: "https://www.ikea.com/in/en/images/products/poaeng-armchair-birch-veneer-hillared-beige__0497125_pe628952_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 5,
        name: "LACK Coffee Table",
        category: "Tables & Desks",
        price: 29.99,
        description: "A simple, low-cost coffee table, available in various colors.",
        stockQuantity: 150,
        image: "https://www.ikea.com/in/en/images/products/lack-coffee-table-white-stained-oak-effect__0711928_pe728568_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 6,
        name: "KALLAX Shelving Unit",
        category: "Bookcases & Shelving Units",
        price: 69.99,
        description: "A versatile, open shelving unit for various storage solutions.",
        stockQuantity: 120,
        image: "https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white-stained-oak-effect__0459252_pe606050_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 7,
        name: "DOCKSTA Table",
        category: "Tables & Desks",
        price: 179.99,
        description: "A round table with a pedestal base, perfect for small dining areas.",
        stockQuantity: 60,
        image: "https://www.ikea.com/in/en/images/products/trotten-desk-beige-anthracite__1020747_pe831975_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 8,
        name: "HEMNES Dresser",
        category: "Storage & Organization",
        price: 229.99,
        description: "A traditional style dresser with smooth running drawers.",
        stockQuantity: 40,
        image: "https://www.ikea.com/in/en/images/products/syvde-dressing-table-white__0747849_pe753575_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 9,
        name: "FADO Floor Lamp",
        category: "Lighting",
        price: 29.99,
        description: "Creates a soft, cosy mood light in your room.",
        stockQuantity: 150,
        image: "https://www.ikea.com/in/en/images/products/lergryn-skaftet-floor-lamp-base-arched-beige-black__1009540_pe827681_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 10,
        name: "STRANDMON Wing Chair",
        category: "Sofas & Armchairs",
        price: 249.99,
        description: "A classic wing chair that offers comfort and a touch of elegance.",
        stockQuantity: 30,
        image: "https://www.ikea.com/in/en/images/products/strandmon-wing-chair-beige__0973252_pe811956_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 11,
        name: "NORDLI Bed Frame",
        category: "Beds",
        price: 299.99,
        description: "A modular bed frame with customizable headboards and ample storage.",
        stockQuantity: 70,
        image: "https://www.ikea.com/in/en/images/products/gjoera-bed-frame-birch-luroey__0637518_pe698354_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 12,
        name: "LERHAMN Table",
        category: "Tables & Desks",
        price: 99.99,
        description: "A small, sturdy dining table with a traditional look.",
        stockQuantity: 80,
        image: "https://www.ikea.com/in/en/images/products/norden-gateleg-table-birch__66396_pe179294_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 13,
        name: "FRIHETEN Sleeper Sofa",
        category: "Sofas & Armchairs",
        price: 499.99,
        description: "A versatile sofa that easily converts into a bed.",
        stockQuantity: 25,
        image: "https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-hyllie-beige__0690253_pe723174_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 14,
        name: "TRONES Shoe Cabinet",
        category: "Storage & Organization",
        price: 39.99,
        description: "A sleek, space-saving shoe cabinet that can also be used for other storage.",
        stockQuantity: 100,
        image: "https://www.ikea.com/in/en/images/products/mackapaer-bench-with-storage-compartments-white__0710735_pe727753_s5.jpg?f=xl",
        username: 'amdutta'
    },
    {
        productId: 15,
        name: "POÄNG Ottoman",
        category: "Sofas & Armchairs",
        price: 49.99,
        description: "A comfortable ottoman that pairs well with POÄNG armchair.",
        stockQuantity: 85,
        image: "https://www.ikea.com/in/en/images/products/strandmon-slipcover-for-footstool-risane-natural__1190511_pe900235_s5.jpg?f=xl",
        username: 'amdutta'
    }

]


//////////////////////////////////
// Import dependencies
/////////////////////////////////
const mongoose = require("./connection.js")
const Product = require("./product.js")

//////////////////////////////////
// Seed Code
//////////////////////////////////
mongoose.connection.on("open", async () => {

  try {

    // Delete all products
    await Product.deleteMany({})

    // Seed Starter Products
    const data = await Product.create(seedProducts)

    // close the DB connection
    mongoose.connection.close()
  } catch (error) {
    console.log("-------", error.message, "-----------")
  }
})
