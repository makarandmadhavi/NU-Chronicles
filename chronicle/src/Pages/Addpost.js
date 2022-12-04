import React from 'react'
import Dropzone from 'react-dropzone';
import { Box } from '@mui/material'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Addpost() {
  return (
    <div>
    <br/><br/>
    <div className="container-xl px-4 mt-4">
{/* Account page navigation*/}

<hr className="mt-0 mb-4" />
<div className="row">
<div className="col-xl-2"></div>
<div className="col-xl-8">
  {/* Account details card*/}
  <div className="card mb-4">
    <div className="card-header">Add a new Post</div>
    <div className="card-body">
      <form>
        
        {/* Form Row*/}
        <div className="row gx-3 mb-3">
          {/* Form Group (first name)*/}
          <div className="col-md-8">
            <label className="small mb-1" htmlFor="inputName">Name of the place</label>
            <input className="form-control" id="inputName" type="text" placeholder="Enter name"  />
          </div>
          {/* Form Group (last name)*/}
          <div className="col-md-8">
            <label className="small mb-1" htmlFor="inputAddress">Address of the place</label>
            <input className="form-control" id="inputLastName" type="text" placeholder="Enter address"  />
          </div>
        </div>
        {/* Form Row        */}
        
          {/* Form Group (organization name)*/}
          <div className="col-md-8">
            <label className="small mb-1" htmlFor="inputDesc">Description</label>
            <textarea className="form-control" id="inputDesc"  placeholder="Enter description"  />

        </div>
        <br/><br/>
      
      <div className="col-md-6">
          <Form.Group className="mb-3 inputGroup">
                    <Form.Label htmlFor="category">Category</Form.Label>
                    <Form.Select id="category">
                        <option disabled>select...</option>
                        <option>Housing</option>
                        <option>Seasonal Clothing</option>
                        <option>Events</option>
                        <option>Nearby Attractions</option>
                    </Form.Select>
                </Form.Group>
         
        
        </div>
      <div className="col-md-8">
      <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  console.log(acceptedFiles)
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed red`}
                    p="1rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                      <p>Add Picture Here</p>
                      
                  </Box>
                )}
              </Dropzone>
              </div>
        {/* Form Row*/}
       
          {/* Form Group (phone number)*/}
         
        
        
        {/* Save changes button*/}
        <br/><br/>
        <div className="col-md-8">
        <button className="btn btn-danger" type="button">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>

</div>

</div>

</div>
  )
}

export default Addpost
