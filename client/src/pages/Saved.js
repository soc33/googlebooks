import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "../components/Grid";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = bookId => {
    API.deleteBook(bookId)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header backgroundImage="books_splash.jpg">
          <h1>Google Books</h1>
          <h2>Saved</h2>
        </Header>
        <Container fluid>
          <div className="card-columns">
            {this.state.books.map(book => (
              <Card
                key={book.bookId}
                bookId={book.bookId}
                title={book.title}
                author={book.author}
                link={book.link}
                description={book.description}
                image={book.image}
                buttonAction={this.deleteBook}
                buttoncn="delete-book"
                buttontext="Delete Book"
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Saved;
