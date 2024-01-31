import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';






const NavBarMenu = () => {

    let activeStyle = {
        textDecoration:'underline',
        fontweight: 'bold'
    }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        
               <img
              src='src\assets\dos-flechas.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> 
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="nav-link" to="/" style={({isActive})=>(isActive ? activeStyle : undefined)} >Home</NavLink>
          <NavLink className="nav-link" to="/about" style={({isActive})=>(isActive ? activeStyle : undefined)} >About</NavLink>
          <NavLink className="nav-link" to="/admin" style={({isActive})=>(isActive ? activeStyle : undefined)} >Admin</NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBarMenu