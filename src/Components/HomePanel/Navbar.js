import Link from "next/link";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Navbar.module.css"; 

const NavbarIndex = ({search,searchHandler}) => {
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container fluid>
        <Navbar.Brand href="/" className="me-md-4">
          <b>RealCoin</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="/" className="mx-2 disabled">Exchange</Nav.Link>
          <Nav.Link href="/" className="mx-2 disabled">Learn</Nav.Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "40vh" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Search Crypto"
              className={`me-2 ${style.search_bar}`}
              aria-label="Search"
              value={search}
              onChange={searchHandler}
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
