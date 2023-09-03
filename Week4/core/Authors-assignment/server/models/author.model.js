const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [3, "the name must be at least 3 characters long"],
    },
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);