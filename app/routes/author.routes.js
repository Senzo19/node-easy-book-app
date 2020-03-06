module.exports = (app) => {
    const authors = require('../controllers/author.controller.js');

    // Create a new Author
    app.post('/authors', authors.create);

    // Retrieve all Authors
    app.get('/authors', authors.findAll);

    // Retrieve a single Author with authorId
    app.get('/authors/:authorId', authors.findOne);

    // Update a Author with authorId
    app.put('/authors/:authorId', authors.update);

    // Delete a Author with authorId
    app.delete('/authors/:authorId', authors.delete);
}