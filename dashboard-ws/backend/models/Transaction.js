const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    transactionid: {
        type: String
    },
    date: {
        type: String
    },
    subtotal: {
        type: String
    },
    name: {
        type: String
    },
    commission: {
        type: Number
    },
    category: {
        type: String
    },
    qty:{
        type: Number
    },
    totalprofit: {
        type: Number
    }
}, {
    collection: 'transaction'
})

module.exports = mongoose.model('Transaction', transactionSchema)
