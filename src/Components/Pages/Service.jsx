import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <Link to="/test">
                  <div className="p-4">
                  <i className="fa fa-3x fa-tools text-primary mb-4" />
                    <h4 className="mb-3">Vocational Training</h4>
                    <p>Our projects are designed to equip individuals with practical skills for employment, fostering confidence.
</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <Link to="/">
                  <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4" />
                    <h4 className="mb-3">Hostel Facilities</h4>
                    <p>Our hostel provides a safe, inclusive, and nurturing environment, ensuring comfort and care for every resident.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                {/* <Link to="/team"> */}
                <div className="p-4">
                <i className="fa fa-3x fa-child text-primary mb-4" />
                  <h4 className="mb-3">Daycare Services</h4>
                  <p>Our daycare services offer structured care, activities, and learning opportunities to support special children and their families.
</p>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <Link to="/library">
                  <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                    <i className="fa fa-3x fa-hand-holding-heart text-primary mb-4" /> 
                    <h4 className="mb-3">Self-Independence</h4>
                     <p>We provide seamless admission support to +2 classes, paving the way for advanced learning and career opportunities.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
