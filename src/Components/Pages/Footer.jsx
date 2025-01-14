import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn btn-link" href>
                About Us
              </a>
              <a className="btn btn-link" href>
                Contact Us
              </a>
              <a className="btn btn-link" href>
              Terms &amp; Condition
              </a>
              <a className="btn btn-link" href>
              FAQs &amp; Help
              </a>
              <a className="btn btn-link" href>
              Lakshya Foundation
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                New Delhi, India
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +91 9582605211
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                lakshyafoundation@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.youtube.com/channel/UC4_JuyoGJItN6RTv2AIgkTg"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/lakshyavtc/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* <a
                  className="btn btn-outline-light btn-social"
                  href="https://github.com/Basant-goswami"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a> */}
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/in/lakshya-vocational-training-centre-705bb4232?originalSubdomain=in"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/c1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/c2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/c4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/c3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/c5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/img/bggp.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Drop Here to Donate:)</h4>
              <p>
              Empowering special children through vocational skills for a brighter tomorrow.
                
              </p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Obliged
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
