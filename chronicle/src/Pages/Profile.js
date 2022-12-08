
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import './css/Profile.css'
import Accordion from 'react-bootstrap/Accordion';
import Dropzone from 'react-dropzone';
import { Box } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ElementCard from '../components/ElementCard'
import housingapi from '../apiservice/postapi'
import userapi from "../apiservice/userapi";


function Profile() {
 
  var user = JSON.parse(localStorage.user);
  const [postsData, setpostsData] = useState(null);
  const [editUser, setEditUser] = useState(user);
  const handleChange = (e) => {
    const { name, value } = e.target
    setEditUser({
        ...editUser,
        [name]: value
    })
    
  }
  const editData = async(editUser) =>{
    userapi.put('/updateuser',editUser).then((response) => {
      console.log(response , "updated");
      alert(response.data.message)
     
    
  })
  .catch((error)=> {
    console.log("Unauthorized! Please enter valid format for each field");
      
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
    if(document.getElementById("inputPassword").value!=document.getElementById("inputConfirmPassword").value){
      alert("Password field and Confirm Password fields do not match !")
      return
    }
    else{
      console.log(editUser, "submit");
      setEditUser(editUser);
      editData(editUser);
    }
    
   
  }
  

  const getPosts = async () => {
    const response = await housingapi.get('/get');
    let data = response.data.filter(value => value.user_ID==
      user._id).map((element,i) => 
      <div  key={i} className="col-lg-4 mb-3 d-flex align-items-stretch" data-toggle="tooltip" data-placement="right" title="Click to edit the post">
        <ElementCard data={element} edit={<button className="btn btn-danger" >Edit</button>}></ElementCard>
       
</div>
    );
    setpostsData(data);
    console.log(data);
  };
  useEffect(() => {
    getPosts();
   
  }, []);
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
                        border={`2px dashed #DC143C`}
                        p="1rem"
                        textAlign="center"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <ArrowCircleUpIcon />
                        <input {...getInputProps()} />
                          <p style={{textAlign: "center", margin: "5px"}}>Add Picture Here</p>
                          
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
          <form onSubmit={handleSubmit}>
            
            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (first name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                <input className="form-control" id="inputFirstName" type="text" defaultValue={editUser.firstName} onChange={handleChange} name="firstName"  placeholder="Enter your first name"  />
              </div>
              {/* Form Group (last name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                <input className="form-control" id="inputLastName" type="text" name="lastName" defaultValue={editUser.lastName} onChange={handleChange} placeholder="Enter your last name"  />
              </div>
            </div>
            {/* Form Row        */}
            <div className="row gx-3 mb-3">
              {/* Form Group (organization name)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputNUID">NUID</label>
                <input className="form-control" id="inputNUID" type="text" defaultValue={editUser.NUID}  readOnly />
              </div>
              {/* Form Group (location)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputRole">Role</label>
                <input className="form-control" id="inputRole" type="text" defaultValue={editUser.role}  placeholder="Enter your role" readOnly/>
              </div>
            </div>
            {/* Form Group (email address)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
              <input className="form-control" id="inputEmailAddress" type="email" defaultValue={editUser.email}  readOnly/>
            </div>
            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (phone number)
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                <input className="form-control" id="inputPhone" type="tel" defaultValue={user.phoneNumber}  placeholder="(555)123-4567"/>
              </div> */}
              {/* Form Group (birthday)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPassword"> New Password</label>
                <input className="form-control" id="inputPassword" name="password" value={editUser.password}  onChange={handleChange} type="password"   />
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputConfirmPassword"> Confirm Password</label>
                <input className="form-control" id="inputConfirmPassword" type="password" name="confirmPassword"  />
              </div>
            
            </div>
            
            
            {/* Save changes button*/}
            <button className="btn btn-danger" style={{margin:'5px'}} type="submit">Save changes</button>
            <button className="btn btn-danger" style={{margin:'5px'}} type="button">Delete Account</button>
          </form>
        </div>
      </div>
    </div>
    <Accordion defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>You Posts !  </Accordion.Header>
        <Accordion.Body>
          <Row> {postsData}</Row>
         
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  </div>
  
</div>

    </div>
  )
}

export default Profile