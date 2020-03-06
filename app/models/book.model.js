const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    ISBN: String,
    price: Number,
    id_autor: String
});

module.exports = mongoose.model('Book', BookSchema);