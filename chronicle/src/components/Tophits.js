import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ElementCard from './ElementCard'
import housingapi from '../apiservice/housingapi'

function Tophits() {

  const [housingData, setHousingData] = useState(null);

  const getHousing = async () => {
    const response = await housingapi.get('/get');
    let data = response.data.map((element,i) => 
      <div  key={i} className="col-lg-4 mb-3 d-flex align-items-stretch">
        <ElementCard data={element}></ElementCard>
      </div>
    );
    setHousingData(data);
    console.log(data);
  };

  useEffect(() => {
    getHousing();

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
                    {/* <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div> */}
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
                    {/* <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <ElementCard></ElementCard>
                    </div> */}
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