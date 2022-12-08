import React from 'react'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Dropzone from 'react-dropzone';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Addpost.css'
import housingapi from '../apiservice/postapi'
import {
  Box,
  // Button,

  Typography,
 
} from "@mui/material";

function Addpost() {
  
  const [value, setValue] = useState("")
  const user = sessionStorage.getItem("user")
  const data = JSON.parse(user)
  console.log(data._id);
  const [newPost, setPost] = useState(
    {
      title: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      photos: '',
      description:'',
      
      category: '',
      
      user_ID : data._id

    }
    
);
const handleChange = (e) => {
  const { name, value } = e.target
  setPost({
      ...newPost,
      [name]: value
  })
  
}

const addData = async(newPost) =>{
  housingapi.post('/create',newPost).then(()=>{
    alert("Post Successfully Created");
  }) .catch((error) => {
    document.getElementById("errorDiv").innerHTML = error.response.data.message;
    console.log(error.response.data);
  })}

const handleSubmit = (e) => {
  e.preventDefault();
  newPost.photos=value;
 
  console.log(newPost, "submit");
  setPost(newPost);
  addData(newPost);
  
  document.getElementById("errorDiv").innerHTML = "";
}
  
  return (
   <div>
    <br></br>
    <Container>
     
    <Form id ="form1" className='card' onSubmit={handleSubmit}>
    <div className="card-header">Add a New Post</div>
    <fieldset className='card-body'>
    <label className="small mb-1" htmlFor="inputName">Name of the Place</label>
    <input className="form-control" id="inputName" type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Enter name"  /><br/>
    <div className="row gx-3 mb-3">
              {/* Form Group (first name)*/}
              <div className="col-md-3">
              <label className="small mb-1" htmlFor="inputAddress">Address</label>
              <input className="form-control" id="inputAddress" type="text" name="address" value={newPost.address} onChange={handleChange} placeholder="Enter address"  />
              
              </div>
              <div className="col-md-3">
              <label className="small mb-1" htmlFor="inputAddress">City</label>
              <input className="form-control" id="inputCity" type="text" name="city" value={newPost.city} onChange={handleChange} placeholder="Enter city"  />
              
              </div>
              <div className="col-md-3">
              <label className="small mb-1" htmlFor="inputAddress">State</label>
              <input className="form-control" id="inputState" type="text" name="state" value={newPost.state} onChange={handleChange} placeholder="Enter state"  />
              
              </div>
              <div className="col-md-3">
              <label className="small mb-1" htmlFor="inputAddress">Zipcode</label>
              <input className="form-control" id="inputZipcode" type="text" name="zipcode" value={newPost.zipcode} onChange={handleChange} placeholder="Enter zipcode"  />
              
              </div>
              </div>
    <br/>
    <label className="small mb-1" htmlFor="inputDesc">Description</label>
    <textarea className="form-control" id="inputDesc" type="text" name="description" value={newPost.description} onChange={handleChange} placeholder="Enter description"  /><br/>
    <Box
                gridColumn="span 4"
                border={`1px solid #222`}
                borderRadius="5px"
                p="1rem"
                sx={{ color: "black" }}
              >
                <Dropzone
                  acceptedFiles="image/*"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setValue(acceptedFiles[0])
                  }

                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      {...getRootProps()}
                      border={`2px dashed #DC143C`}
                      p="1rem"
                      textAlign="center"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >

                      <input {...getInputProps()} />
                      <ArrowCircleUpIcon />
                      {!value.name ? (
                        <p style={{ textAlign: "center", margin: "5px" }}>Add Picture Here</p>
                      ) : (
                        <Typography sx={{ textAlign: "center" }}>{value.name}</Typography>

                      )}


                    </Box>
                  )}
                </Dropzone>
                </Box>
    <br/>
    <label className="small mb-1" htmlFor="category">Category</label>
                   <Form.Select id="category"  name="category"  value={newPost.category} onChange={handleChange} >
                      <option disabled>select...</option>
                        <option>Housing</option>
                        <option>Grocery</option>
                      <option>Seasonal Clothing</option>
                     <option>Events</option>
                       <option>Nearby Attractions</option>
                     </Form.Select>  
                     <br/>
                    
        <div id="errorDiv" style={{color: "red"}}>
                
                </div>
      {/* <div id='eventdate'>
      <label className="small mb-1" htmlFor="inputDate">Date and Time of the Event</label>
      <Form.Control type="datetime-local" min={new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))} id="inputDateTime"  name="dateTime" />        
      </div> */}
    <br/> 
   <button className="btn btn-danger" id='savepost' type="submit">Save </button> 
    </fieldset>
</Form>
</Container>
</div>


  )
}

export default Addpost
