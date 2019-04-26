import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    startIndex: 0
  };
  
  saveBook = id => {
    this.state.books.forEach(book => {
      if (book.bookId === id) {
        API.saveBook(book)
          .then(res => { })
          .catch(err => console.log(err));
      };
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.author) {
      API.getBooks(this.state.title, this.state.author, this.state.startIndex)
        .then(res => {
          const books = res.data.items.map(book => {
            return {
              bookId: book.id,
              title: (book.volumeInfo.title ? book.volumeInfo.title : "No Title"),
              author: (book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"),
              description: (book.volumeInfo.description ? book.volumeInfo.description : "No description."),
              image: (book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""),
              link: (book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "No Title")
            };
        });
          this.setState({ books: books });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Header backgroundImage="books_splash.jpg">
          <h1>Google Books</h1>
          <h2>Search</h2>
        </Header>
        <Container fluid="fluid" cn="search-form">
          <Row>
            <Col size="sm-12">
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (optional)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (optional)"
                />
                <FormBtn
                  disabled={!(this.state.author || this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <div className="card-columns">{this.state.books.map(book => (
            <Card
              key={book.bookId}
              bookId={book.bookId}
              title={book.title}
              author={book.author}
              link={book.link}
              description={book.description}
              image={book.image}
              buttonAction={this.saveBook}
              buttoncn="save-book"
              buttontext="Save Book"
            />
          ))}</div>
          
        </Container>
      </div>
    );
  }
}

export default Search;
