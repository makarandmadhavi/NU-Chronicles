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

} from "@mui/material";

import './css/NavigationBar.css'

import { UserContext } from "../App";

function Navigationbar() {

  const { state, dispatch } = useContext(UserContext)

  const RenderMenu = () => {
    if(state){
      return(
        <>
          <FormControl variant="standard" value="fullname">
              <Select
                value="Deep"
                sx={{
                  backgroundColor: "#FFF",
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "#FFF",
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value="fullName">
                  <Typography>fullName</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch({type: "USER", payload: false})}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
        </>
      )
    }else{
      return (
        <LoginModal/>
      )
    }
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