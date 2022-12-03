import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './NavigationBar.css'



function Navigationbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
        
        <Navbar.Brand href="#home">
            <img src='images/D.png' height="30"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">Top Hits</Nav.Link>

          </Nav>
          <Button variant="danger">Login</Button>{" "}
        </Navbar.Collapse>
        
        
      </Container>
      </Navbar>
      
    </>
  )
}

export default Navigationbar