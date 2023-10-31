const mongoose = require('mongoose');
const schema = mongoose.Schema;
const adminuserSchema = new schema({
    name: String,
    email: String,
    password: String
})
const ADMINUSER = mongoose.model('adminuser', adminuserSchema)
module.exports = ADMINUSER;

