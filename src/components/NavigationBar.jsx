import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
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
  );
}

export default NavigationBar;
