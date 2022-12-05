import React from 'react'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Dropzone from 'react-dropzone';
import { Box } from '@mui/material'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Addpost.css'

function Addpost() {
  const [category, setCategory] = useState('Housing');
  
  useEffect(() =>{
  console.log(category);
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
        images:''

    }
    
);


const handleChange = (e) => {
  const { name, value } = e.target
  setHouse({
      ...newHouse,
      [name]: value
  })
  
}
console.log(newHouse)
const handleSubmit = (e) => {
  e.preventDefault();
  // const formData = new FormData();
  // formData.append('photo', new.photo);
  // formData.append('birthdate', newUser.birthdate);
  // formData.append('name', newUser.name);

  // axios.post('http://localhost:5000/users/add/', formData)
  //      .then(res => {
  //         console.log(res);
  //      })
  //      .catch(err => {
  //         console.log(err);
  //      });
}
  
  return (
   <div>
    <br></br>
    <Container>
     
    <Form className='card'>
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

//     <div>
//     <br/><br/>
//     <div className="container-xl px-4 mt-4">
// {/* Account page navigation*/}

// <hr className="mt-0 mb-4" />
// <div className="row">
// <div className="col-xl-2"></div>
// <div className="col-xl-8">
//   {/* Account details card*/}
//   <div className="card mb-4">
//     <div className="card-header">Add a new Post</div>
//     <div className="card-body">
//       <form>
        
//         {/* Form Row*/}
//         <div className="row gx-3 mb-3">
//           {/* Form Group (first name)*/}
//           <div className="col-md-8">
//             <label className="small mb-1" htmlFor="inputName">Name of the place</label>
//             <input className="form-control" id="inputName" type="text" placeholder="Enter name"  />
//           </div>
//           {/* Form Group (last name)*/}
//           <div className="col-md-8">
//             <label className="small mb-1" htmlFor="inputAddress">Address of the place</label>
//             <input className="form-control" id="inputLastName" type="text" placeholder="Enter address"  />
//           </div>
//         </div>
//         {/* Form Row        */}
        
//           {/* Form Group (organization name)*/}
//           <div className="col-md-8">
//             <label className="small mb-1" htmlFor="inputDesc">Description</label>
//             <textarea className="form-control" id="inputDesc"  placeholder="Enter description"  />

//         </div>
//         <br/><br/>
      
//       <div className="col-md-6">
//           <Form.Group className="mb-3 inputGroup">
//                     <Form.Label htmlFor="category">Category</Form.Label>
//                     <Form.Select id="category">
//                         <option disabled>select...</option>
//                         <option>Housing</option>
//                         <option>Seasonal Clothing</option>
//                         <option>Events</option>
//                         <option>Nearby Attractions</option>
//                     </Form.Select>
//                 </Form.Group>
         
        
//         </div>
//       <div className="col-md-8">
//       <Dropzone
//                 acceptedFiles=".jpg,.jpeg,.png"
//                 multiple={false}
//                 onDrop={(acceptedFiles) =>
//                   console.log(acceptedFiles)
//                 }
//               >
//                 {({ getRootProps, getInputProps }) => (
//                   <Box
//                     {...getRootProps()}
//                     border={`2px dashed red`}
//                     p="1rem"
//                     sx={{ "&:hover": { cursor: "pointer" } }}
//                   >
//                     <input {...getInputProps()} />
//                       <p>Add Picture Here</p>
                      
//                   </Box>
//                 )}
//               </Dropzone>
//               </div>
//         {/* Form Row*/}
       
//           {/* Form Group (phone number)*/}
         
        
        
//         {/* Save changes button*/}
//         <br/><br/>
//         <div className="col-md-8">
//         <button className="btn btn-danger" type="button">Save changes</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

// </div>

// </div>

// </div>
  )
}

export default Addpost
