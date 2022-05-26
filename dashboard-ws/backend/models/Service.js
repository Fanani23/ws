const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serviceSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
   
}, {
    collection: 'service'
})

module.exports = mongoose.model('Service', serviceSchema)
