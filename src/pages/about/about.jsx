import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faSmileBeam, faCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <FontAwesomeIcon icon={faShop} size="3x" className="text-primary mb-3" />
        <h2 className="fw-bold">About SinaHg Shop</h2>
        <p className="text-muted">
          Welcome to <strong>SinaHg Shop</strong> – your friendly, modern shopping experience!
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4 text-center">
          <FontAwesomeIcon icon={faSmileBeam} size="2x" className="text-info mb-3" />
          <h5>Customer-Centric</h5>
          <p>We build with passion and put customers first, ensuring a joyful shopping experience.</p>
        </div>

        <div className="col-md-4 text-center">
          <FontAwesomeIcon icon={faCode} size="2x" className="text-success mb-3" />
          <h5>Modern Tech Stack</h5>
          <p>Built with React and powered by context-based state management for smooth performance.</p>
        </div>

        <div className="col-md-4 text-center">
          <FontAwesomeIcon icon={faShop} size="2x" className="text-warning mb-3" />
          <h5>Simple & Clean</h5>
          <p>A clean and minimal design that’s responsive, fast, and easy to use across all devices.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
