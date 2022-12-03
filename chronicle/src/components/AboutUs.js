import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


import OffCanvasComponent from './OffCanvasComponent';
import Image from 'react-bootstrap/Image'
import { AlignDirection } from 'react-bootstrap/esm/types';
import './css/aboutus.css';

function AboutUs() {

  return (
    <>
    <section id='about' >
        <Container>
            <Row>
                <Col sm={8} style={{padding: '10px' }}>
                {/* <div className='col-sm-8'> */}
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
                   
                    <OffCanvasComponent variant='outline-danger' name='NU Useful Links' placement='start'>
                    </OffCanvasComponent>
                    {/* </div> */}
                </Col>
               
                    <img className='col-sm-4' src='images/logo.png' id="logo-main" />
                </Row>
        </Container>
    
    </section>
   </>
  )
}

export default AboutUs;