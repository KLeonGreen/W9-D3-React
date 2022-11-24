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

  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  render() {
    return (
      <Card key={this.props.books.asin} onClick={this.changeStatus} style={{ border: this.state.clicked ? "4px solid lime" : "" }}>
        <Card.Img variant="top" src={this.props.books.img} />
        <Card.Body>
          <Card.Title>{this.props.books.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
