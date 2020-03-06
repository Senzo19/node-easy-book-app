const mongoose = require('mongoose');

const PurchaseSchema = mongoose.Schema({
    id_customer: String,
    id_book: String,
    date: Date
});

module.exports = mongoose.model('Purchase', PurchaseSchema);