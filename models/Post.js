var mongoose = require('mongoose')
var postSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [
        {
            commentId: {
                type: String,
            },
        }
    ]
    },
    { timestamps: true}, 
)
module.exports = mongoose.model("Cart", cartSchema)

