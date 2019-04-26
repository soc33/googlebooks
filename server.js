const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const booksController = require("./controllers/booksController");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("/api/saved", (req, res) => {
  booksController.findAll(req, res);
});

// Add routes, both API and view
app.post("/api/book", (req, res) => {
  booksController.update(req, res);
});

app.delete("/api/book/:bookId", (req, res) => {
  booksController.remove(req, res);
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});