import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';

import './css/NavigationBar.css'



function Navigationbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark fixed-top" expand="lg">
    <Container fluid>
        
        <Navbar.Brand href="/">
            <img src='images/D.png' height="30"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">Top Hits</Nav.Link>
            <Button variant='danger' onClick={sessionStorage.removeItem('user')}>Logout</Button>

          </Nav>
          <LoginModal/> 
        </Navbar.Collapse>
        
        
      </Container>
      </Navbar>
      
    </>
  )
}

export default Navigationbar