const mongoose = require('mongoose')
const schema = mongoose.Schema
const categoryschema = new schema ({
    name: String,
    image: String
})
const CATEGORY = mongoose.model('category',categoryschema)
module.exports = CATEGORY;