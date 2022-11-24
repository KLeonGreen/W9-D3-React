import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <div className="all-comments">
        <ListGroup>
          <ListGroup.Item>{this.props.comments.comment}</ListGroup.Item>
          <ListGroup.Item>Rate: {this.props.comments.rate} / 5</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default CommentsList;
