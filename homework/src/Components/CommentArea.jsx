import { Component } from "react";
import CommentList from "../Components/CommentsList.jsx";
import AddComment from "../Components/AddComment.jsx";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getBooks = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjkyOTY0OTcsImV4cCI6MTY3MDUwNjA5N30.sMiBu2CBbQ4FbAQFIAiKtIgcpySWP-Yt65fPmgJS4vI",
      },
    };

    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookID, options);

    if (response.ok) {
      const data = await response.json();
      this.setState({
        comments: data,
      });
      console.log(data);
    }
    console.log(this.props.bookID);
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div style={{ color: "black" }}>
        <div className="comment-area" type="text">
          {this.state.comments.map((comment) => (
            <CommentList comments={comment} />
          ))}
        </div>
        <div>
          <AddComment bookID={this.props.bookID} />
        </div>
      </div>
    );
  }
}

export default CommentArea;
