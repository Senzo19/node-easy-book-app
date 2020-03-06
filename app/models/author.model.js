const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String
});

module.exports = mongoose.model('Author', AuthorSchema);