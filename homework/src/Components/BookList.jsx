import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import history from "../books/history.json";
import SingleBook from "../Components/SingleBook";

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
          <input type="text" onKeyUp={this.filterBooks} />
          <Row>
            {history
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
