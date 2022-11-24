import { Component } from "react";
import { Card } from "react-bootstrap";
import "../Components/SingleBook.css";
import CommentArea from "../Components/CommentArea.jsx";

class SingleBook extends Component {
  state = {
    clicked: false,
  };

  changeStatus = (e) => {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
      // console.log(this.props.books.asin);
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    return (
      <>
        <Card style={{ border: this.state.clicked ? "4px solid lime" : "" }}>
          <Card.Img variant="top" src={this.props.books.img} onClick={this.changeStatus} />
          <Card.Body>
            <Card.Title>{this.props.books.title}</Card.Title>
          </Card.Body>
          {this.state.clicked && <CommentArea bookID={this.props.books.asin} />}
        </Card>
      </>
    );
  }
}

export default SingleBook;
