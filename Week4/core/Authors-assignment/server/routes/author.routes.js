const AuthorController = require('../controllers/author.controllers');
module.exports = (app) => {
    app.post('/api/Author', AuthorController.createAuthor);
    app.get('/api/Author', AuthorController.FindAllAuthor); 
    app.get('/api/Author/:id', AuthorController.FindOneAuthor); 
    app.put('/api/Author/:id', AuthorController.updateAuthor); 
    app.delete('/api/Author/:id', AuthorController.deleteAuthor); 
}