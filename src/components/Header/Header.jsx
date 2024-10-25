import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Todo App</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
