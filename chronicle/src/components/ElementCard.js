import React, { useState } from 'react'
import Card from 'react-bootstrap/card'
import { Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './css/ElementCard.css'

function ElementCard(props) {
    const data = props.data;
    const [ value, setValue ] = useState("5")
    return (
        <Card className='elementCard'>
            <Card.Header>{data.category}</Card.Header>
            <Card.Img variant="top" height= "250px" width="auto" src={data.photos[0].path} />
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
            </Card.Footer>
        </Card>
    )
}

export default ElementCard