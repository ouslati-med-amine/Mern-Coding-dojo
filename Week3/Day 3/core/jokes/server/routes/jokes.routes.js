const jokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes);
    app.get('/api/jokes/one/:id', jokeController.findOneSingleJoke);
    app.put('/api/jokes/update/:id', jokeController.updateExistingJoke);
    app.post('/api/jokes', jokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', jokeController.deleteAnExistingJoke);
}