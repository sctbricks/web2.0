import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="social-links animated-item">
              <a href="https://wa.me/+918428560078" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="tel:+918428560078">
                <i className="fas fa-phone-alt"></i>
              </a>
              {/* Replace "#" with a valid URL or remove the anchor tag if it's not needed */}
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
            <p className="copyright animated-item">
              &copy; 2024 SCT Bricks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
