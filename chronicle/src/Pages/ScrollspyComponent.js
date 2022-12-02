import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';
import './css/scrollspy.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Link } from 'react-router-dom';

export default function ScrollspyComponent() {
  const section1 = useRef('section1');
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  

  const containerRef = useRef(null);


  return (
    <section id='resources' className='container'>
      <Container>
        <Row>
          <Col sm={4}>
          <div className='list-group'>
         
          <ListGroupItem  variant='action'>
          <i class="fa fa-hashtag"aria-hidden="true"></i>
             Off Campus Housing

          </ListGroupItem>
         
         
          <ListGroupItem  variant='action' >

          <i class="fa fa-hashtag"aria-hidden="true"></i>
          Grocery Shopping
          </ListGroupItem>
          
          <ListGroupItem  variant='action' targetRef={section3}>
          <i class="fa fa-hashtag"aria-hidden="true"></i>
          Seasonal Clothing

          </ListGroupItem>
          <ListGroupItem   variant='action'targetRef={section4}>
          <i class="fa fa-hashtag"aria-hidden="true"></i>
          Live Events

          </ListGroupItem>
          <ListGroupItem  variant='action' targetRef={section5}>
          <i class="fa fa-hashtag"aria-hidden="true"></i>
          Nearby Attractions

          </ListGroupItem>
          </div>
          
          </Col>
          <Col>
          <div data-bs-spy="scroll" id="scrollspy-div" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                        <h4 id="section1"  ref={section1} >Off Campus Housing</h4>
                        <p>Most new international students struggle to find affordable good housing choices before
                            moving to Boston. They are all new to the nation and find it difficult to trust anyone. </p>
                        <p>They are exclusively affiliated with the institution, and our websites enable them to
                            immediately communicate with NU students and obtain all recommendations based on their
                            experience.</p>
                        <p> They could also be victims of deception. Our website provides them with genuine information
                            via NU current and alumnus students, allowing them to reserve any houses for rent from home
                            before arrival with ease.</p>
                        <h4 id="section2"  ref={section2}>Grocery Shopping</h4>
                        <p>Different country, different culture, and different sorts of cuisine, new NU international
                            students would be relieved if they knew where to get fresh vegetables, fruits, meat, and so
                            on to suit their taste, choice, and preferences.</p>
                        <p>They could benefit immensely from the reviews, which can help them choose the best grocery
                            store for their purposes. </p>
                        <p>The reviews and ratings from the current NU students and alumunus would include many
                            characteristics such as distance, pricing, variety, and so on, giving students a wide range
                            of options to choose from.</p>
                        
                        <h4 id="section3"  ref={section3}>Seasonal Clothing</h4>
                        <p>Seasonal changes in the United States could be new and different for some international
                            students, and each season has its own significance.</p>
                        <p>Because most incoming NU international students have limited understanding about the severity
                            or pattern of weather in Boston, they would greatly benefit from some past experiential
                            advise.</p>
                        <p>Some locations in Boston are well-known for selling good winter jackets and snow boots, so
                            new students will receive all necessary directions, advice, and ideas to prepare for any
                            seasonal changes in the United States.</p>

                        <h4 id="section4"  ref={section4}>Live Events</h4>
                        <p>New students at Northeastern can connect with the campus culture by watching live streams of
                            happenings and events on campus.</p>
                        <p>After all, they are the new cultural carriers, therefore knowing their university is
                            essential.</p>
                        <p>In this digital age, everything is aired live, thus our website would allow students to watch
                            any activities that are being live streamed and connect with other NU students. This would
                            be a great oppurtunity for them to become a part of the university before and prepare
                            themselves with enthusiasm to give thier best as soon as they start here.</p>
                        <h4 id="section5"  ref={section5}> Nearby Attractions </h4>
                        <p>Boston is a student hub, with students coming from all over the world to acquire the best
                            renowned world education. </p>
                        <p>Students have the opportunity to immerse themselves in this unique culture, push themselves
                            globally, and grow together.</p>

                        <p>There are several places in Boston, especially close to the university, that one should
                            definitely visit in order to truly feel intellect, culture, and science.
                            NU students and alumni who have already explored and researched can share their experiences
                            for all.</p>
                  </div>
          </Col>
        </Row>
   </Container>
   </section>

  );
}