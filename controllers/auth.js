// const User = require("../models/User")

exports.getSignUp = (req, res, next) => {
    res.render("auth/signup")
}

exports.postSignUp = async(req, res) =>{
    const newUser = new User ({
        username: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await newUser.save()
        res.render("shop/index")
    } catch (err) {
        console.log(err)
    }
}

exports.getLogin = (req, res, next) => {
    res.render("auth/login")
}