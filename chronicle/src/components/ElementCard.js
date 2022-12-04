import React from 'react'
import Card from 'react-bootstrap/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './css/ElementCard.css'

function ElementCard(props) {
    const data = props.data;
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
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
                </span>
                
                (31)
            </Card.Footer>
        </Card>
    )
}

export default ElementCard