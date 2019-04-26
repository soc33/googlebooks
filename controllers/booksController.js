const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find()
      .sort({ date: -1 })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ bookId: req.body.bookId}, req.body, { upsert: true, setDefaultsOnInsert: true })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.deleteOne({bookId : req.params.bookId})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};
