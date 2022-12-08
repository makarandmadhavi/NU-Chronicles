import React, { useState } from 'react'
import Card from 'react-bootstrap/card'
import { Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './css/ElementCard.css'
import { Navigate, useNavigate } from "react-router-dom";

function ProfileElementCard(props) {
    const data = props.data;
    var photoPath = "images/house1.jpg";
    if(data.photos[0]){
        photoPath = "images/" + data.photos[0].path;
    }

    const navigate = useNavigate();
    const viewPost = (id)=>{
        return navigate("/viewpost", {state:{id:id}});
    }
    const editPost = (id)=>{
        return navigate("/editpost", {state:{id:id}});
    }

    return (
        <Card  id={data._id} className='elementCard'>
            <Card.Header>{data.category}</Card.Header>
            <Card.Img variant="top" height= "250px" width="auto" src={photoPath} />
            <Card.Body>
                <Card.Title>
                    {data.title}
                </Card.Title>
                <Card.Text>
                {data.description}
                </Card.Text>
            
            </Card.Body>
            <Card.Footer >
                <span>
                <Rating
                    readOnly
                    name="simple-controlled"
                    sx={{size: "large"}}
                    value={data.overall_rating}
                    // onChange={(event, newValue )  => {
                    //     setValue(newValue);
                    // }}
                />
                </span>
                ({data.rating_list.length}) 
                <button onClick={e => viewPost(data._id)} className="btn btn-danger" >View</button>
                <button onClick={e => editPost(data._id)} className="btn btn-danger" >Edit</button>
            </Card.Footer>
        </Card>
    )
}

export default ProfileElementCard