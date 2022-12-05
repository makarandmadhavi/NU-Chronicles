import React from 'react'
import './css/Viewpost.css'
import {Container,Row , Col} from 'react-bootstrap';
function Viewpost() {
    
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
        <p className="card-text"> Total Ratings:
  
      
        </p>
        <p className="card-text"><small className="text-muted">Date of created</small></p>
      </div>
    </div>
  </div>
</div>

</Container>

  )
}

export default Viewpost