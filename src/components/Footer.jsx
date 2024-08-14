import React from "react";
// import "../assets/styles.css";

const Footer = () => {
  return (
    <footer className="container-fluid mt-1 p-4">
      <div className="container">
        <div className="row pb-1">
          <div className="col-lg-3 col-md-12">
            <img src="/website/img/logo.png" alt="Footer Logo" />
          </div>

          <div className="col-lg-6 col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Travel Tips
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Get Inspired
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cheap Airfare
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active btn btn-light" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active btn btn-light" href="#">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active btn btn-light" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row pt-2">
          <div className="col-lg-12 text-center">
            <span>
              &copy; <a href="#">NewToDesign.com</a> All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
