
import { Link, NavLink } from "react-router-dom";
import { CartWidgets } from "../CartWidgets/CartWidgets";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


export const NavBar = ({ login}) => {
  console.log(login)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Pepe's Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Categoria/Comidas">Comidas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Categoria/Bebidas">Bebidas</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav className="justify-content-end">
            {
              !login &&
              <>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                <Nav.Link as={Link} to="/Registro">Registrarse</Nav.Link>
              </>
            }
            {
              login &&
              <>
                <CartWidgets />
              </>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

