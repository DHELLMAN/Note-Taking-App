const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    notes: [{
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            required: true
        }
    }]
}) 

module.exports = mongoose.model('Note',noteSchema);