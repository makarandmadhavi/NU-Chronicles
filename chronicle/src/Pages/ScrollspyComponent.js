import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';
import './css/scrollspy.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Link } from 'react-router-dom';
import $ from 'jquery';


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
        <div className="row">
          <div className="col-4">
            <br />
            <div id="list-example" className="list-group">
            <Link className="list-group-item list-group-item-action" to={{ hash:"#list-item-1", state: { fromScrollspyComponent: true }}}> <i className="fa fa-hashtag" aria-hidden="true" /> Off Campus Housing</Link>
            <Link className="list-group-item list-group-item-action" to={{hash:"#list-item-2", state: { fromScrollspyComponent: true }}}> <i className="fa fa-hashtag" aria-hidden="true" /> Grocery Shopping</Link>
            <Link className="list-group-item list-group-item-action" to={{hash:"#list-item-3", state: { fromScrollspyComponent: true }}}> <i className="fa fa-hashtag" aria-hidden="true" /> Seasonal Clothing</Link>
            <Link className="list-group-item list-group-item-action" to={{hash:"#list-item-4", state: { fromScrollspyComponent: true }}}> <i className="fa fa-hashtag" aria-hidden="true" /> Live Events</Link>
            <Link className="list-group-item list-group-item-action" to={{hash:"#list-item-5", state: { fromScrollspyComponent: true }}}> <i className="fa fa-hashtag" aria-hidden="true" /> Nearby Attractions</Link>
            </div>
          </div>
          <div className="col-8">
            <br />
            <div data-bs-spy="scroll" style={{ overflowY: 'auto', height: '280px' }} data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
              <hr />
              <div id="list-item-1">
                <h4>Off Campus Housing</h4>
                <p>Most new international students struggle to find affordable good housing choices before
                  moving to Boston. They are all new to the nation and find it difficult to trust anyone. </p>
                <p>They are exclusively affiliated with the institution, and our websites enable them to
                  immediately communicate with NU students and obtain all recommendations based on their
                  experience.</p>
                <p> They could also be victims of deception. Our website provides them with genuine information
                  via NU current and alumnus students, allowing them to reserve any houses for rent from home
                  before arrival with ease.</p><br /><br /><br />
                <hr />
              </div>
              <div id="list-item-2">
                <h4 >Grocery Shopping</h4>
                <p>Different country, different culture, and different sorts of cuisine, new NU international
                  students would be relieved if they knew where to get fresh vegetables, fruits, meat, and so
                  on to suit their taste, choice, and preferences.</p>
                <p>They could benefit immensely from the reviews, which can help them choose the best grocery
                  store for their purposes. </p>
                <p>The reviews and ratings from the current NU students and alumunus would include many
                  characteristics such as distance, pricing, variety, and so on, giving students a wide range
                  of options to choose from.</p>
                <br /><br /><br />
                <hr />
              </div>
              <div id="list-item-3">
                <h4 >Seasonal Clothing</h4>
                <p>Seasonal changes in the United States could be new and different for some international
                  students, and each season has its own significance.</p>
                <p>Because most incoming NU international students have limited understanding about the severity
                  or pattern of weather in Boston, they would greatly benefit from some past experiential
                  advise.</p>
                <p>Some locations in Boston are well-known for selling good winter jackets and snow boots, so
                  new students will receive all necessary directions, advice, and ideas to prepare for any
                  seasonal changes in the United States.</p><br /><br /><br />
                <hr />
              </div>
              <div id="list-item-4">
                <h4 >Live Events</h4>
                <p>New students at Northeastern can connect with the campus culture by watching live streams of
                  happenings and events on campus.</p>
                <p>After all, they are the new cultural carriers, therefore knowing their university is
                  essential.</p>
                <p>In this digital age, everything is aired live, thus our website would allow students to watch
                  any activities that are being live streamed and connect with other NU students. This would
                  be a great oppurtunity for them to become a part of the university before and prepare
                  themselves with enthusiasm to give thier best as soon as they start here.</p><br /><br /><br />
                <hr />
              </div>
              <div id="list-item-5">
              <h4 >Nearby Attractions</h4>
              <p>Boston is a student hub, with students coming from all over the world to acquire the best
                renowned world education. </p>
              <p>Students have the opportunity to immerse themselves in this unique culture, push themselves
                globally, and grow together.</p>
              <p>There are several places in Boston, especially close to the university, that one should
                definitely visit in order to truly feel intellect, culture, and science.
                NU students and alumni who have already explored and researched can share their experiences
                for all.</p><br /><br /><br />
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
}