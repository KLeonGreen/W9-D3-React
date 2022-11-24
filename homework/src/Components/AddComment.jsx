import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    users: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  sendCommentHandler = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify(this.state.users),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjkyOTY0OTcsImV4cCI6MTY3MDUwNjA5N30.sMiBu2CBbQ4FbAQFIAiKtIgcpySWP-Yt65fPmgJS4vI",
      },
    };

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", options);

      if (response.ok) {
        alert("Comment Sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  onChangeHandler = (value, name) => {
    this.setState({
      users: {
        ...this.state.users,
        [name]: value,
      },
    });
  };
  componentDidMount() {
    this.setState({
      users: {
        elementId: this.props.bookID,
      },
    });
  }

  render() {
    return (
      <div>
        <textarea className="add-comment" type="text" placeholder="Add Comment" value={this.state.users.comment} onChange={(e) => this.onChangeHandler(e.target.value, "comment")} />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rate this book</Form.Label>
          <Form.Control as="select" value={this.state.users.rate} onChange={(e) => this.onChangeHandler(e.target.value, "rate")}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <button className="btn btn-secondary" onClick={this.sendCommentHandler}>
          Add Comment
        </button>
      </div>
    );
  }
}

export default AddComment;
