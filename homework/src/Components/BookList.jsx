import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                return (
                  <Col xs={12} sm={6} md={4} lg={3} xl={2} key={book.asin}>
                    <SingleBook books={book} />;
                  </Col>
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
