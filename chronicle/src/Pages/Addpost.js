import React from 'react'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Dropzone from 'react-dropzone';
import { Box } from '@mui/material'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Addpost.css'
import housingapi from '../apiservice/housingapi'

function Addpost() {
  const [category, setCategory] = useState('Housing');
  
  useEffect(() =>{
  
  if(category=='Housing'){
   document.getElementById('floorplan').style.display='block';
   document.getElementById('eventdate').style.display='none';
  }
  else if(category=='Events'){
    document.getElementById('floorplan').style.display='none';
    document.getElementById('eventdate').style.display='block';
  }
  else{
    document.getElementById('floorplan').style.display='none';
    document.getElementById('eventdate').style.display='none';
  }
  },[category]);

  const [newHouse, setHouse] = useState(
    {
        title: '',
        address: '',
        description: '',
        floorPlan:'',
        // images:''

    }
    
);


const handleChange = (e) => {
  const { name, value } = e.target
  setHouse({
      ...newHouse,
      [name]: value
  })
  
}

const addData = async(newHouse) =>{
  housingapi.post('/create',newHouse).then((response) => {
    console.log(response , "created");
   
  
})
.catch((error)=> {
  console.log("byee")
    
    if (error.response+"1") {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request+"2") {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request+"3");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message+"3");
    }
})
 

};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(newHouse, "submit");
  setHouse(newHouse);
  addData(newHouse);
  setHouse([]);
}
  
  return (
   <div>
    <br></br>
    <Container>
     
    <Form className='card' onSubmit={handleSubmit}>
    <div className="card-header">Add a New Post</div>
    <fieldset className='card-body'>
    <label className="small mb-1" htmlFor="inputName">Name of the Place</label>
    <input className="form-control" id="inputName" type="text" name="title" value={newHouse.title} onChange={handleChange} placeholder="Enter name"  /><br/>
    <label className="small mb-1" htmlFor="inputAddress">Address of the Place</label>
    <input className="form-control" id="inputAddress" type="text" name="address" value={newHouse.address} onChange={handleChange} placeholder="Enter address"  />
    <br/>
    <label className="small mb-1" htmlFor="inputDesc">Description</label>
    <textarea className="form-control" id="inputDesc" type="text" name="description" value={newHouse.description} onChange={handleChange} placeholder="Enter description"  /><br/>
    <Dropzone
      acceptedFiles={"image/*"}
      multiple={false}
      onDrop={(acceptedFiles) => 
       console.log(acceptedFiles[0].path)
        
       
      }
      
    >
      {({ getRootProps, getInputProps }) => (
        <Box
          {...getRootProps({onClick: event => console.log(event.target)})}
          border={`2px dashed red`}
          p="1rem"
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <input {...getInputProps()} name="v" onChange={(e) => console.log(e.target.value)} />
          <p>Add Picture here</p>
            
        </Box>
      )}
    </Dropzone> 
    <br/>
    <label className="small mb-1" htmlFor="category">Category</label>
                   <Form.Select id="category"  onChange={(e) => setCategory(e.target.value)} >
                      <option disabled>select...</option>
                        <option>Housing</option>
                      <option>Seasonal Clothing</option>
                     <option>Events</option>
                       <option>Nearby Attractions</option>
                     </Form.Select>  
                     <br/>
                    
   <div id='floorplan'>
      <label className="small mb-1" htmlFor="inputFloorPlan">Floor Plan of the House</label>
      <input className="form-control" id="inputFloorPlan" type="text" name="floorPlan" value={newHouse.floorPlan} onChange={handleChange} placeholder="Enter floorplan"  />              
      </div>
      <div id='eventdate'>
      <label className="small mb-1" htmlFor="inputDate">Date and Time of the Event</label>
      <Form.Control type="datetime-local" min={new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))} id="inputDateTime"  name="dateTime" />        
      </div>
    <br/> 
   <button className="btn btn-danger" id='savepost' type="submit">Save </button> 
    </fieldset>
</Form>
</Container>
</div>


  )
}

export default Addpost
