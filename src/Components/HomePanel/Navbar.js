import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

const NavbarIndex = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="me-md-4">
          <b>RealCoin</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="#action1" className="mx-2">Exchange</Nav.Link>
          <Nav.Link href="#action1" className="mx-2">Learn</Nav.Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "40vh" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Crypto"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className={`d-flex`}>
            <Link href="/login" className="btn btn-outline-primary">
              Login
            </Link>
            <span className="mx-2"></span>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarIndex;
