import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-200px" >
            <Nav.Link  to={'/'} >Home</Nav.Link>
            <Nav.Link  to={"/products"} >Products</Nav.Link>
            <Nav.Link  to={"/about"} >About</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" style={{color:'white'}}>
              <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jewelery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Men's clothing</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Women's clothing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;