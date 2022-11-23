import { Card, Col } from "react-bootstrap";

const SingleBook = ({ books }) => {
  return (
    <Col md={4} key={books.asin}>
      <Card>
        <Card.Img variant="top" src={books.img} />
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
