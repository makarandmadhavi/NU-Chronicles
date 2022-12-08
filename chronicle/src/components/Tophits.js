import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ElementCard from './ElementCard'
import housingapi from '../apiservice/postapi'

function Tophits() {

  const [housingData, setHousingData] = useState(null);
  const [groceryData, setGroceryData] = useState(null);


  const getHousing = async () => {
    const response = await housingapi.get('/get');
    let data = response.data.filter(value => value.category == "Housing").slice(0,3).map((element,i) => 
      <div  key={i} className="col-lg-4 mb-3 d-flex align-items-stretch">
        <ElementCard data={element}></ElementCard>
      </div>
    );
    setHousingData(data);
    console.log(data);
  };
  const getGrocery = async () => {
    const response = await housingapi.get('/get');
    let data = response.data.filter(value => value.category == "Grocery").slice(0,3).map((element,i) => 
      <div  key={i} className="col-lg-4 mb-3 d-flex align-items-stretch">
        <ElementCard data={element}></ElementCard>
      </div>
    );
    setGroceryData(data);
    console.log(data);
  };

  useEffect(() => {
    getHousing();
    getGrocery();
  }, []);


  return (
    <div>
      <section id="tophits" className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Off Campus Housing Top Reccomndations &nbsp;<span className="badge bg-danger"> New </span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <div className="accordion-body">
                  <div className="row">
                    {housingData}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Grocery Stores Top Reccomndations &nbsp; <span className="badge bg-danger"> New </span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
                <div className="accordion-body">
                  <div className="row">
                    {groceryData}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Meet Some of Our Verified Alumnus &nbsp; <span className="badge bg-danger"> New </span>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
                <div className="accordion-body">
                  <div className="row">
                  
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/amritesh.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Amritesh Raj <i className="fa fa-check-circle" aria-hidden="true" /> </h5>
                          <p className="card-text">He graduated from NU in 2019.He is currently working as
                            a Software Engineer at Google. Look for his reviews and ratings on our
                            website.</p>
                         
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/chris.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Chris Martin <i className="fa fa-check-circle" aria-hidden="true"> </i></h5>
                          <p className="card-text">He graduated from NU in 2015.He is currently working as
                            a Technical Program Manager at Aspen Technologies. Look for his reviews
                            and ratings on our website.</p>
                         
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/xhua.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Xuang Hu <i className="fa fa-check-circle" aria-hidden="true"> </i></h5>
                          <p className="card-text">He graduated from NU in 2020 .He is currently a PHD
                            researcher st Sanford University. Look for his reviews and ratings on
                            our website.</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Tophits