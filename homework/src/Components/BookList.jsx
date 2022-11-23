import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "../Components/SingleBook";
import "../Components/SingleBook.css";

class BookList extends Component {
  state = {
    userInput: "",
  };

  filterBooks = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <>
        <Container>
          <input type="text" placeholder="Search book here..." onKeyUp={this.filterBooks} />
          <Row>
            {this.props.book
              .filter((book) => book.title.includes(this.state.userInput))
              .map((book) => {
                return <SingleBook books={book} />;
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
