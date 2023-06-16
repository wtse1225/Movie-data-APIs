import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <Navbar className='fixed-top' bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>Wai Hing William Tse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
              <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}