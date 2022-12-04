import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Search from '../components/Search';
import './css/Search.css';
import './css/Profile.css'
import ElementCard from '../components/ElementCard';
import {Row , Col} from 'react-bootstrap';

function Dashboard() {
  return (
    <Container>
      <Search></Search>
      <Container>
        <hr /> 
        <Row>
          <Col sm={4}>
          <ElementCard></ElementCard>
          </Col> 
          <Col sm={4}>
          <ElementCard></ElementCard>
          </Col> 
          <Col sm={4}>
          <ElementCard></ElementCard>
          </Col> 
        </Row> 
      </Container>
    </Container>
  )
}

export default Dashboard;