import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Search from '../components/Search';
import './css/Search.css';
import './css/Profile.css'
import ElementCard from '../components/ElementCard';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import postapi from '../apiservice/postapi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Dashboard() {

  const [results, setresults] = useState(null);

  const getResults = async () => {
    const response = await postapi.get('/get');
    let data = response.data.map((element, i) =>
      <div key={i} className="col-lg-4 mb-3 d-flex align-items-stretch">
        <ElementCard data={element}></ElementCard>
      </div>
    );
    setresults(data);
    console.log(data);
  };

  useEffect(() => {
    getResults();
  }, []);

  const search = async (e) => {
    e.preventDefault();
    let category = document.getElementById("category");
    let val = category.value;

    let response = await postapi.get('/get', {
      params: {
        title: document.getElementById("searchInput").value,
        category: val
      }
    });

    let data = response.data.map((element, i) =>
      <div key={i} className="col-lg-4 mb-3 d-flex align-items-stretch">
        <ElementCard data={element}></ElementCard>
      </div>
    );
    setresults(data);

    console.log(val);
  }
  return (
    <Container>
      <Form className='card'>
        <div className="card-header">Look Up Reccomndations</div>
        <fieldset className='card-body'>
          <Form.Group className="mb-3 inputGroup">
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select id="category">
              <option value="All" disabled selected>All</option>
              <option value="Housing" >Housing</option>
              <option value="Grocery">Grocery</option>
              <option value="Seasonal Clothing">Seasonal Clothing</option>
              <option value="Events">Events</option>
              <option value="Nearby Attractions">Nearby Attractions</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 inputGroup">

            <Form.Control id="searchInput" placeholder="Enter name of the place..." />
            <Button type="submit" onClick={search} variant='danger'>Search</Button>

          </Form.Group>

        </fieldset>
      </Form>
      <Container>
        <hr />
        <Row>
          {results}
        </Row>
      </Container>
    </Container>
  )
}

export default Dashboard;