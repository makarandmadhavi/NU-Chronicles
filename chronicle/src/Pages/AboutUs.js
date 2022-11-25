import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OffCanvasComponent from './OffCanvasComponent';
import Image from 'react-bootstrap/Image'
import { AlignDirection } from 'react-bootstrap/esm/types';
import './aboutus.css';

function AboutUs() {
  return (
    <>
   <Container fluid className='mt-2'>
   <Row className='align-items-center'>
    
    <Col sm='8' className='text-left'>
    <br />
                    <p>
                        NU Chronicles is a one-stop solution for all new international students at Northeastern
                        University.</p>
                    <p>
                        It provides students with a list of the most cost-effective options for accommodation, grocery
                        stores, seasonal shopping, and places to dine, among other things, that have been verified and
                        approved by current NU students and alumnus, so benefiting them while also protecting them.</p>
                    <p>
                        Each option has been examined and rated by NU students, making it the most reputable and
                        accurate source of information for all incoming international NU students.
                    </p>
                    <br />
                    
                    
                    {/* <Button variant='outline-danger'> */}
                    <OffCanvasComponent variant='outline-danger' name='NU Useful Links' placement='start' >

                    </OffCanvasComponent>
                    {/* </Button> */}




    </Col>
    <Col sm='4'>
        <img src='images/logo.png' id='logo-main'/>
    </Col>
   </Row>
   </Container>
   </>
  )
}

export default AboutUs;