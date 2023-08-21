const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: Number
    },
    createdAt: {
        type: Number
    },
    updatedAt: {
        type: Number
    }
});

module.exports = mongoose.model('Jokes', JokesSchema);
