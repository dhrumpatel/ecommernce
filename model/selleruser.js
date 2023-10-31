const mongoose = require('mongoose');
const schema = mongoose.Schema;
const selleruserSchema = new schema({
    name: String,
    email: String,
    password: String
})
const SELLERUSER = mongoose.model('selleruser', selleruserSchema)
module.exports = SELLERUSER;

