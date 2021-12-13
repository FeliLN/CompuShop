import React from 'react';

//Bootstrap
import {Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form, FormControl} from 'react-bootstrap';

// Estilo
import './NavBar.css';

import Logo from '../img/on-logo3D-1.png';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  const shop = 'shop';

  return (

    <nav className='navbar'>
      <div className='nav-content'>
      <Navbar bg="transparent" expand={false} collapseOnSelect variant="dark">
        <Container >
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="logo" />
            
            {/* <h1 className="Logo"> 
          
           </h1> */}
           </Navbar.Brand>
          <Navbar.Toggle className="Toggle" aria-controls="offcanvasNavbar" />
        

          {/* Tab content */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">G-Soft</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href={shop} >Shop</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="otracosa">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"                
                />
                <Button variant="outline-success">
                  <FontAwesomeIcon icon={faSearch} transform="grow-2" />
                  </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
        </Container>
        
      </Navbar>
      <Form className="form-search">
                <FormControl
                  type="search"
                  placeholder="Look in Market"
                  className="me-2"
                  aria-label="Search"
                  bg="dark"
                />
               
      <Button  style={
          {
          color:"#8ff93c", 
          backgroundColor:"black", 
          transition:"all 1s ease 0s",
          width: "40px"
          } 
          
        }
        variant="outline-secondary" size="sm">
        <FontAwesomeIcon icon={faSearch} transform="grow-4" />
      </Button>
      
      </Form>
     
      </div>

      <div className="nav-content-2">
      <h3 className="FAQ"> FAQ </h3>
      <h3 className="Contact" > Contact </h3>
      <FontAwesomeIcon icon={faShoppingCart} transform="shrink-6" className="Cart"  />
      <FontAwesomeIcon icon={faUser} transform="shrink-6" className="User"  />
      </div>
    </nav>
  
  );
};

