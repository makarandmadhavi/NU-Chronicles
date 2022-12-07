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

  const [ open, setOpen ] = useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const name = sessionStorage.getItem("user")

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const RenderMenu = () => {
    if(state){
      return(
        <>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{bgcolor: "#DC143C"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px', ml: 165, width: 110 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch({type: "USER", payload: false})}>
                  <Typography textAlign="center">LogOut</Typography>
                </MenuItem>
            </Menu>
          </Box>
         
        
        {/* <Select
                value="fullname"
                sx={{
                  color: "#FFF",
                  backgroundColor: "#DC143C",
                  width: "150px",
                  open: {open},
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem"
                }}
                input={<InputBase />}
              >
                <MenuItem value="fullname">
                  <Typography>Deep Shah</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch({type: "USER", payload: false})}>
                  Log Out
                </MenuItem>
              </Select> */}
              
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
