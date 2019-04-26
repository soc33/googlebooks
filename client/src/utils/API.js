import axios from "axios";

export default {
  // Gets all books
  getBooks: function(title, author, startIndex) {
    let url = "https://www.googleapis.com/books/v1/volumes?q=";
    url += title ? "intitle:" + title.trim().replace(" ", "+") : "";
    url += author && !title ? "inauthor:" + author.trim().replace(" ", "+") : "";
    url += title && author ? "+inauthor:" + author.trim().replace(" ", "+") : "";
    url += "&printType=books&maxResults=40&startIndex=" + startIndex;
    return axios.get(url);
  },
  getSavedBooks: function () {
    return axios.get("/api/saved");
  },
  saveBook: function (book) {
    return axios.post("/api/book", book);
  },
  // Deletes the book with the given id
  deleteBook: function(bookId) {
    return axios.delete("/api/book/" + bookId);
  }
};
