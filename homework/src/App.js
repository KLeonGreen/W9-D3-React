import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../src/books/history.json";
import { Container, Row } from "react-bootstrap";
import WarningSign from "./Components/WarningSign.jsx";
import MyBadge from "./Components/MyBadge.jsx";
import BookList from "./Components/BookList.jsx";

function App() {
  return (
    <div className="App">
      <WarningSign message="Warning, Something Went Wrong!!!" />
      <MyBadge color="success" text="My Added Text" />
      <Container>
        <Row>
          <BookList book={history} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
