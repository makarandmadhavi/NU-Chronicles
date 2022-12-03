import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Tophits() {
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
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/house1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Hungtinton Avenue</h5>
                          <p className="card-text">This is one of the closest and safiest
                            area near Northeastern University with a distance of 1 miles.</p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" /> (25)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/house2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Park Drive</h5>
                          <p className="card-text">This is one of the popular and affordable
                            accommodation near Northeastern University with a distance of 0.5 miles.
                          </p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />(31)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/house3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Mission Main</h5>
                          <p className="card-text">It's known for being closer to grocery stores as well
                            the university
                            with a distance of 0.8 miles</p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />(55)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
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
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/grocery1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Target </h5>
                          <p className="card-text">Your all in one store where you
                            can find all the household essential products as well as groceries.</p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />(35)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/grocery2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Stop &amp; Shop</h5>
                          <p className="card-text">Best place to buy
                            economical and fresh groceries for students.They can find fruits,
                            vegetables and meat.</p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star " />
                          <span className="fa fa-star" />(29)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                      <div className="card" style={{width: '100%'}}>
                        <img src="images/grocery3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">InstaCart</h5>
                          <p className="card-text">One stop solution for ordering
                            groceries from different stores that are straight delivered at your
                            door-step.</p>
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star " />
                          <span className="fa fa-star " />
                          <span className="fa fa-star" />(22)
                          <a href="#" className="btn btn-outline-danger">View More</a>
                        </div>
                      </div>
                    </div>
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
                          <a href="#" className="btn btn-outline-danger">View More</a>
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
                          <a href="#" className="btn btn-outline-danger">View More</a>
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
                          <a href="#" className="btn btn-outline-danger">View More</a>
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