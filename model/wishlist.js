const mongoose = require('mongoose')
const schema = mongoose.Schema
const whishlistschema = new schema({
    product: {
        type: schema.Types.ObjectId,
        ref: "product"
    },
    user: {
        type: schema.Types.ObjectId,
        ref: "user"
    }
})
const WISHLIST = mongoose.model('wishlist', whishlistschema)
module.exports = WISHLIST