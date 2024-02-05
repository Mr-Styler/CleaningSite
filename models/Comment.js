var mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
    senderId: String,
    body: String,
},
    { timestamps: true}, 
)
module.exports = mongoose.model("Order", orderSchema)

