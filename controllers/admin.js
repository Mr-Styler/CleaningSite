// var Product = require("../models/Product")

exports.getDashboard = (req, res) =>{
    res.render("cleaners")
}

exports.getAddProduct = (req, res) =>{
    res.render("admin/add-Products")
}

exports.postAddProduct = (req, res) =>{
    Product.create({
        title: req.body.title,
        image: req.body.imageUrl,
        quantity: req.body.quantity,
        price: req.body.price,
        color: "Purple",
        description: req.body.description
    }, (err, product) => {
        if (err) {
            return console.log(err)
        }
        console.log("created product", product)
       res.redirect("/products")
    } );
    
}

exports.getEditProduct = (req, res) =>{
    res.render("cleaners")
}

exports.getAdminProducts = (req, res) =>{
    Product.find({}, (err, product) => {
        if (err) {
            return console.log(err)
        }        
    res.render("admin/products", {PageTitle: "Products", Path: "/admin/products", Products: product})
    })
}