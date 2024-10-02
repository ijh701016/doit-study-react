import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>게시글 1</Card.Title>
        <Card.Text>어쩌고 저쩌고</Card.Text>
        <Button variant="primary">이동하기</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
