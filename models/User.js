var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    image: String,
    password: { type: String, required: true,},
    isAdmin: { type: Boolean, default:false},
    },
    { timestamps: true}, 
)
module.exports = mongoose.model("User", userSchema)