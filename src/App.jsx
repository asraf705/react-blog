import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./assets/styles.css";
import Single from "./pages/Single";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
