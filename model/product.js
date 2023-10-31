const mongoose = require("mongoose")
const schema = mongoose.Schema
const productschema = new schema ({
    title: String,
    discription: String,
    price: String,
    discountPercentage: String,
    rating: String,
    stock: String,
    brand: String,
    thumbnail: String,
    images: [String],
    category: {
        type: schema.Types.ObjectId,
        ref:"category"
    },

})
const PRODUCT = mongoose.model("product", productschema)
module.exports = PRODUCT