import React, { useEffect, useState } from 'react'
import './css/Viewpost.css'
import Accordion from 'react-bootstrap/Accordion';
import { Rating, Button, TextField } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap';
import QandA from '../widgets/QandA';
import { useLocation } from 'react-router-dom';
import postapi from '../apiservice/postapi';

function Viewpost() {
  const [value, setValue] = useState("5");
  const location = useLocation();
  const [data, setData] = useState({});
  console.log(location.state.id + "State ");

  const getResults =  async () => {
    const response = await postapi.get('/get', {
      params: {
        _id: location.state.id,
      }

    });
    // console.log(response.data.title + " <= response");
    setData(response.data);
    console.log(response.data);

  }

  useEffect(() => {
    getResults();
  }, [])



  return (
    <Container>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="card mb-3" >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src='/images/attra.jpg' className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.title} </h5>
              <p className="card-text"> Category: {data.category}</p>
              <p className="card-text"> Address: {data.address}</p>
              <p className="card-text"> Description: {data.description}</p>
              <p className="card-text"> Total Ratings: {data.overall_rating}
              </p>
              <p className="card-text"><small className="text-muted">{data.updatedAt}</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-4">
          <div className="card-body">
            <h6 className="card-title">Leave a Rating</h6>
          </div>
          <Rating sx={{ mt: 2 }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-title">Leave a Review</h6>
          </div>
          <TextField sx={{ mt: 2, width: "50%" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder='Review... '
            size='small'
          />
          <Button sx={{ ml: 3, mt: 2, backgroundColor: "#DC143C" }}
            variant="contained">Submit</Button>
        </div>
      </div>
      <br /><br /><br /><br />
      <div className='row'>
        <div className="col-md-6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>All Reviews</Accordion.Header>
              <Accordion.Body>
                <div className="container1">
                  <img src="/images/attra.jpg" alt="Avatar" style={{ width: '90px' }} />
                  <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                  <p>John Doe saved us from a web disaster.</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-md-6">
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Question and Answers</Accordion.Header>
              <Accordion.Body>
                <QandA />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>

      </div>



    </Container>

  )
}

export default Viewpost