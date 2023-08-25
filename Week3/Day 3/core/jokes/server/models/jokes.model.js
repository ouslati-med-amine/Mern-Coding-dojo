const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },

});

module.exports = mongoose.model('Jokes', JokesSchema);
