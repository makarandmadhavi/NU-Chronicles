import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Dashboard() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#dashboard">
          {" "} <img
              alt=""
              src="/images/D.png"
              height="30"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#profile">Mark Otto</a>{" "}
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container fluid="md">
      <Row xs={1} md={2} className="g-4">
     
              <Col >
            <Card>
            <Card.Header>Category</Card.Header>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Footer >reviews</Card.Footer>
            </Card>
            
            </Col>
            <Col>
            <Card>
            <Card.Header>Category</Card.Header>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Footer >reviews</Card.Footer>
            </Card>
            
            </Col >
            <Col >
            <Card>
            <Card.Header>Category</Card.Header>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Footer >reviews</Card.Footer>
            </Card>
            </Col>
    
    </Row>
        </Container>
    </>
    
    
    
        
   
 ) }
export default Dashboard