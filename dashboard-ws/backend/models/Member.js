const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let memberSchema = new Schema({
    memberid: {
        type: String
    },
    birtday: {
        type: String
    },
    name: {
        type: String
    },
    membership: {
        type: String
    },
   
}, {
    collection: 'member'
})

module.exports = mongoose.model('Member', memberSchema)
