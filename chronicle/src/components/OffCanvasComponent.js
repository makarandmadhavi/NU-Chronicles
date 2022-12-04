import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css/OffCanvas.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faCalendar, faGear } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'
import { colors } from '@material-ui/core';


function OffCanvasComponent({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="outline-danger" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>NU Useful Links</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item><a className='link' target='_blank' href="https://northeastern.sharepoint.com/sites/studenthub/SitePages/Student-Resources.aspx#/resources" ><FontAwesomeIcon icon={faHome} style={{color: "red"}}/><span className='spanLink'>NU Student Hub</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' target='_blank'  href="https://northeastern.instructure.com/" ><FontAwesomeIcon icon={faBook} style={{color: "red"}} /><span className='spanLink'>Canvas</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' target='_blank'  href="https://calendar.northeastern.edu/#_ga=2.82547862.1073769387.1665519946-283250814.1634905989" ><FontAwesomeIcon icon={faCalendar} style={{color: "red"}}/><span className='spanLink'>NU Events</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' target='_blank'  href="https://hr.northeastern.edu/#_ga=2.82547862.1073769387.1665519946-283250814.1634905989" ><FontAwesomeIcon icon={faGear} style={{color: "red"}}/><span className='spanLink'>NU Works</span></a></ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}




export default OffCanvasComponent;