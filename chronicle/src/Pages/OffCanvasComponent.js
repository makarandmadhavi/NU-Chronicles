import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faCalendar, faGear } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'


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
                        <ListGroup.Item><a className='link' href="https://northeastern.sharepoint.com/sites/studenthub/SitePages/Student-Resources.aspx#/resources" ><FontAwesomeIcon icon={faHome} /><span className='spanLink'>NU Student Hub</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' href="https://northeastern.instructure.com/" ><FontAwesomeIcon icon={faBook} /><span className='spanLink'>Canvas</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' href="https://calendar.northeastern.edu/#_ga=2.82547862.1073769387.1665519946-283250814.1634905989" ><FontAwesomeIcon icon={faCalendar} /><span className='spanLink'>NU Events</span></a></ListGroup.Item>

                        <ListGroup.Item><a className='link' href="https://hr.northeastern.edu/#_ga=2.82547862.1073769387.1665519946-283250814.1634905989" ><FontAwesomeIcon icon={faGear} /><span className='spanLink'>NU Works</span></a></ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}




export default OffCanvasComponent;