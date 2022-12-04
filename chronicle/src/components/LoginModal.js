import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Register from './Register';
import Login from '../Pages/loginPage/index'
import { style } from '@mui/system';


function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Login />
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal