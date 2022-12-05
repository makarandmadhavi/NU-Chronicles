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
            <Card.Header>Category</Card.Header>
            <Card.Img variant="top" src='images/house1.jpg' />
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
                    name="simple-controlled"
                    sx={{size: "large"}}
                    value={value}
                    onChange={(event, newValue )  => {
                        setValue(newValue);
                    }}
                />
                </span>
                (31)
            </Card.Footer>
        </Card>
    )
}

export default ElementCard