const mongoose = require('mongoose')
const schema = mongoose.Schema
const cartschema = new schema({
    product: {
        type: schema.Types.ObjectId,
        ref: "product"
    },
    user: {
        type: schema.Types.ObjectId,
        ref: "user"
    }
})
const CART = mongoose.model('cart', cartschema)
module.exports = CART