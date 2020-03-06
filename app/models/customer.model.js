const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String
});

module.exports = mongoose.model('Customer', CustomerSchema);