import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// 과제: bootstrap이나 css등 아무거나 사용하여 홈페이지나 블로그 홈을 만들어보기

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">내 블로그</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#link">전체 게시글</Nav.Link>
              <NavDropdown title="더 보기" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">프로필</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">asdf</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <div className="slidercontents">
            <div className="wrapText">
              <h1>슬라이드 1</h1>
              <div className="d-none d-md-block">
                <p>
                  Carousel 컴포넌트를 사용하여 슬라이드를 적용했습니다.
                  Carousel컴포넌트 안에 Carousel.Item컴포넌트를 함께 사용해야
                  합니다.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slidercontents2">
            <div className="wrapText">
              <h1>슬라이드 2</h1>
              <div className="d-none d-md-block">
                <p>
                  사진과 배경설정 등은 index.css안에 css코드로 해결했습니다.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>게시글 1</Card.Title>
            <Card.Text>어쩌고 저쩌고</Card.Text>
            <Button variant="primary">이동하기</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>게시글 2</Card.Title>
            <Card.Text>어쩌고 저쩌고</Card.Text>
            <Button variant="primary">이동하기</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>게시글 3</Card.Title>
            <Card.Text>어쩌고 저쩌고</Card.Text>
            <Button variant="primary">이동하기</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>게시글 4</Card.Title>
            <Card.Text>어쩌고 저쩌고</Card.Text>
            <Button variant="primary">이동하기</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>게시글 5</Card.Title>
            <Card.Text>어쩌고 저쩌고</Card.Text>
            <Button variant="primary">이동하기</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
