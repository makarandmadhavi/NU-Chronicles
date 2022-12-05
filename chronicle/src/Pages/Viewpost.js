import React, { useState } from 'react'
import './css/Viewpost.css'
import { Rating, Button, TextField} from '@mui/material'
import {Container,Row , Col} from 'react-bootstrap';
function Viewpost() {
  const [ value, setValue ] = useState("5")
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
        <h5 className="card-title">Name of the post</h5>
        <p className="card-text"> Category:</p>
        <p className="card-text"> Address:</p>
        <p className="card-text"> Description:</p>
        <p className="card-text"> Category:</p>
        <p className="card-text"> Total Ratings
        </p>
        <p className="card-text"><small className="text-muted">Date of created</small></p>
      </div>
    </div>
  </div>
</div>

<div className='row'>
  <div className="col-md-4">
        <div className="card-body">
          <h6 className="card-title">Leave a Rating</h6>
        </div>
        <Rating sx={{mt: 2}}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue )  => {
            setValue(newValue);
          }}
        />
  </div>
  <div className="col-md-8">
        <div className="card-body">
          <h6 className="card-title">Leave a Review</h6>
        </div>
        <TextField sx={{mt: 2, width: "50%"}}
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder='Review... '
          size='small'
        />
        <Button sx={{ml: 3, mt: 2, backgroundColor: "#DC143C"}}
        variant="contained">Submit</Button>
  </div> 
</div>






</Container>

  )
}

export default Viewpost