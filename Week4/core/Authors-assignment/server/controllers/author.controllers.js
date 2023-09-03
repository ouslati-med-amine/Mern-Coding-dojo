const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err => res.status(400).json(err));
}
module.exports.FindAllAuthor = (req, res) => {
    Author.find()
        .then(Authors => res.json(Authors))
        .catch(err => res.json(err));
}
module.exports.FindOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err));
}
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true,runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}