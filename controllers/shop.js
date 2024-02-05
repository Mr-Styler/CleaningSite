// var Product = require("../models/Product")
// var mongoose = require("mongoose")

exports.getIndex = (req, res)=>{
    res.render('shop/index')
}

exports.getProducts = (req, res)=>{
    Product.find({}, (err, product) => {
        if (err) {
            return console.log(err)
        }
    res.render('shop/products', {PageTitle: "Products", Path: "/products", Products: product})        
    })
}

exports.getShowProduct = (req, res)=>{
    res.render('shop/show')        
}

exports.getCart = (req, res) =>{
    res.render("shop/cart")
}

exports.getOrder = (req, res) =>{
    res.render("shop/order")
}

exports.getCheckout = (req, res) =>{
    res.render("shop/checkout")
}

exports.postAddCart = (req, res) =>{
    console.log("cart post route")
}