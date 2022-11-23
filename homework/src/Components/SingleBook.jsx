import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import "../Components/SingleBook.css";

class SingleBook extends Component {
  state = {
    clicked: false,
  };

  changeStatus = (e) => {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
      console.log(e);
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card key={this.props.books.asin} onClick={this.changeStatus} style={{ border: this.state.clicked ? "1px solid red" : "" }}>
          <Card.Img variant="top" src={this.props.books.img} />
          <Card.Body>
            <Card.Title>{this.props.books.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
