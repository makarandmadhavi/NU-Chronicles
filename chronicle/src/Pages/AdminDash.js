import { Box } from "@mui/system"
import { Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import Navigationbar from "../components/Navigationbar";
import userapi from "../apiservice/userapi";
import { useState, useEffect } from 'react';
import postapi from '../apiservice/postapi';

function AdminDash(){

    const [usersStudent, setUsersStuden] = useState();
    const [usersAlumni, setUsersAlumni] = useState();
    const [totalPosts, setTotalPosts] = useState({
        total:'',
        housing :'',
        grocery:'',
        seasonal:'',
        events:'',
        attractions:''
     } );

  const getUsers = async () => {
    const response = await userapi.get('/allusers');
    let data = ((response.data).filter(role=>role.role =="student")).length;
    let data2 = ((response.data).filter(role=>role.role =="alumni")).length;
    setUsersStuden(data);
    setUsersAlumni(data2);
    console.log(data);
    console.log(data2);
   
  };
  const getPosts = async () => {
    const response = await postapi.get('/get');
    totalPosts.total= response.data.length
    totalPosts.housing = ((response.data).filter(role=>role.category =="Housing")).length;
    totalPosts.grocery = ((response.data).filter(role=>role.category =="Grocery")).length;
    totalPosts.seasonal = ((response.data).filter(role=>role.category =="Seasonal Clothing")).length;
    totalPosts.events = ((response.data).filter(role=>role.category =="Events")).length;
    totalPosts.attractions = ((response.data).filter(role=>role.category =="Nearby Attractions")).length;
    
    setTotalPosts(totalPosts);
    console.log(totalPosts);

  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
    return(
        <>
        <br/>
        <br/>
        <br/>
        <Box>
            <Box dsiplay="flex" justifyContent="space-between">
                <Typography variant="h4" color="#222" fontWeight="bold" sx={{mb: "5px", mr: 150}}>DASHBOARD</Typography>
                <Typography variant="h6" color="#DC143C" sx={{mr: 167}}>Welcome</Typography>
        </Box>
        </Box>
        <br/><br/>
        <div className="container">
        <div className="row" >
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Students Registered</div>
                <div className="card-body">
                <h3 className="card-title">Total :{usersStudent}</h3> 
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Alumni Registered</div>
                <div className="card-body">
                <h3 className="card-title">Total :{usersAlumni}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Total Reccomndations</div>
                <div className="card-body">
                <h3 className="card-title">Total :{totalPosts.total}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Seasonal  Reccomndations</div>
                <div className="card-body">
                <h3 className="card-title">Total :{totalPosts.seasonal}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Housing Reccomndations</div>
                <div className="card-body">
                <h3 className="card-title">Total :{totalPosts.housing}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Grocery Reccomndations</div>
                <div className="card-body">
                    <h3 className="card-title">Total :{totalPosts.grocery}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Events Reccomndations</div>
                <div className="card-body">
                <h3 className="card-title">Total :{totalPosts.events}</h3>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header"> Nearby Attractions</div>
                <div className="card-body">
                    <h3 className="card-title">Total :{totalPosts.attractions}</h3>
                    
                </div>
                </div>
            </div>
            </div>
            </div>

        </>  
    )
}

export default AdminDash