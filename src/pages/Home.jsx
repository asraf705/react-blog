import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "../assets/styles.css";

const Home = () => {
  return (
    <div className="container-fluid" id="header">
      <div className="container" id="hero">
        <Navbar />
        <div className="row justify-content-end">
          <div className="col-lg-6 hero-img-container">
            <div className="hero-img">
              <img
                src="https://asraf-profile.vercel.app/assets/img/me_2.png"
                alt="Zero"
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero-title">
              <h1>To theory equation, more have the or to was the</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2 mb-2 pt-5 pb-5" id="article-grid">
        <div className="row justify-content-center">
          {[...Array(10).keys()].map((i) => (
            <div key={i} className="col-xl-6 col-lg-12 text-center">
              <a href="/single">
                <div className="article-card">
                  <div className="article-img">
                    <img
                      src={`/website/img/${i + 1}.jpeg`}
                      alt={`Article ${i + 1}`}
                    />
                  </div>
                  <div className="article-meta text-left">
                    <h2>Article Title {i + 1}</h2>
                    <p>Article description...</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center pb-3 mb-5">
        <a href="#" className="btn btn-lg btn-light">
          More Articles
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
