import React from 'react'
import './css/Profile.css'
import Accordion from 'react-bootstrap/Accordion';
import Dropzone from 'react-dropzone';
import { Box } from '@mui/material'


function Profile() {
  return (
    <div>
        <br/><br/>
        <div className="container-xl px-4 mt-4">
  {/* Account page navigation*/}

  <hr className="mt-0 mb-4" />
  <div className="row">
    <div className="col-xl-4">
      {/* Profile picture card*/}
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Profile Picture</div>
        <div className="card-body text-center">
          {/* Profile picture image*/}
          <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
          {/* Profile picture help block*/}
          <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
          {/* Profile picture upload button*/}
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
      </div>
    </div>
    <div className="col-xl-8">
      {/* Account details card*/}
      <div className="card mb-4">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <form>
            
            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (first name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name"  />
              </div>
              {/* Form Group (last name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name"  />
              </div>
            </div>
            {/* Form Row        */}
            <div className="row gx-3 mb-3">
              {/* Form Group (organization name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputNUID">NUID</label>
                <input className="form-control" id="inputNUID" type="text" placeholder="Enter your NUID" readOnly />
              </div>
              {/* Form Group (location)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputRole">Role</label>
                <input className="form-control" id="inputRole" type="text" placeholder="Enter your role" readOnly/>
              </div>
            </div>
            {/* Form Group (email address)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
              <input className="form-control" id="inputEmailAddress" type="email" placeholder="@northeastern.edu" readOnly/>
            </div>
            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (phone number)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                <input className="form-control" id="inputPhone" type="tel" placeholder="(555)123-4567"/>
              </div>
              {/* Form Group (birthday)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPassword">Password</label>
                <input className="form-control" id="inputPassword" type="password" name="password"  />
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputConfirmPassword"> Confirm Password</label>
                <input className="form-control" id="inputConfirmPassword" type="password" name="confirmPassword"  />
              </div>
            
            </div>
            
            
            {/* Save changes button*/}
            <button className="btn btn-danger" type="button">Save changes</button>
          </form>
        </div>
      </div>
    </div>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Your Posts</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Your Tickets</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  
</div>

    </div>
  )
}

export default Profile