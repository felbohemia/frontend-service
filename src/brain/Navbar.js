import React from 'react';
import './navbar-static-top.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () =>{

     return(
      <>
         <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/main">Main</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
     </>
     );
}

export default Navigation;