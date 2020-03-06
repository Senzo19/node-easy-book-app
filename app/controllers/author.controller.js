const Author = require('../models/author.model.js');

// Create and Save a new Author
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email) {
        return res.status(400).send({
            message: "Author email can not be empty"
        });
    }

    // Create a Author
    const author = new Author({
        first_name: req.body.first_name || "Unamed Author", 
        last_name: req.body.last_name,
        email: req.body.email
    });

    // Save Author in the database
    author.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Author."
        });
    });
};

// Retrieve and return all authors from the database.
exports.findAll = (req, res) => {
    Author.find()
    .then(authors => {
        res.send(authors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authors."
        });
    });
};

// Find a single author with a authorId
exports.findOne = (req, res) => {
    Author.findById(req.params.authorId)
    .then(author => {
        if(!author) {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });            
        }
        res.send(author);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving author with id " + req.params.authorId
        });
    });
};

// Update a author identified by the authorId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.email) {
        return res.status(400).send({
            message: "Author email can not be empty"
        });
    }

    // Find author and update it with the request body
    Author.findByIdAndUpdate(req.params.authorId, {
        firts_name: req.body.first_name || "Unamed Author", 
        last_name: req.body.last_name,
        email: req.body.email
    }, {new: true})
    .then(author => {
        if(!author) {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });
        }
        res.send(author);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });                
        }
        return res.status(500).send({
            message: "Error updating author with id " + req.params.authorId
        });
    });
};

// Delete a author with the specified authorId in the request
exports.delete = (req, res) => {
    Author.findByIdAndRemove(req.params.authorId)
    .then(author => {
        if(!author) {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });
        }
        res.send({message: "Author deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });                
        }
        return res.status(500).send({
            message: "Could not delete author with id " + req.params.authorId
        });
    });
};
