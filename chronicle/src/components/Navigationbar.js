import React, { useContext, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';

import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Avatar,
  Menu, Box, Tooltip
} from "@mui/material";

import './css/NavigationBar.css'

import { UserContext } from "../App";
import { Icon, IconButton } from '@material-ui/core';
import { bgcolor } from '@mui/system';


function Navigationbar() {

  const { state, dispatch } = useContext(UserContext)

  const user = sessionStorage.getItem("user")
  const data = JSON.parse(user)

  const logIn = localStorage.getItem('loggedIn')
  
  const handlelogout = () => {
    localStorage.removeItem("loggedIn")
    dispatch({type: "USER", payload: false})
  }

  const RenderMenu = () => {
      return(
        <>
          {state && logIn &&
          <Box sx={{ flexGrow: 0}}>
          <Tooltip title={data.email}>
            <IconButton sx={{ p: 0 }}>
             <Avatar sx={{bgcolor: "#DC143C"}} alt={data.firstName} src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Button variant="danger" onClick={handlelogout} >
            Logout
          </Button>
          </Box>
          }
          {!state && !logIn &&
            <LoginModal/>
          }
          
          
        </>
      )
  }

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
        </Nav>
        {/* <LoginModal/>
        <Button>Click</Button>  */}
        <RenderMenu />
      </Navbar.Collapse>
          
      </Container>
      </Navbar>
      
    </>
  )
}

export default Navigationbar
