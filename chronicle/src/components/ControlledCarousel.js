import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/housing.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h4>Off Campus Housing</h4>
                        <p>Get experiential housing assistance from NU students and alumni with reviews and ratings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/groceries.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h4>Grocery Shopping</h4>
                        <p>Discover the top NU students recommended grocery stores selections with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/clothing.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>Seasonal Clothing</h4>
                        <p>Prepare for each season with our assistance and shop at the most economical rated stores.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/attra.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>Nearby Attractions</h4>
                        <p>When you arrive in Boston, check out the NEU's top recommendations for nearby attractions.
                        </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/event.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>Events</h4>
                        <p>Experience what's going on at and around the university where the students get the most out of the places around the university.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default ControlledCarousel;