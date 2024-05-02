import React from "react";
import './Aboutpage.css'
import aboutImage from './about.png'; // Import the image

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              SCT[Shri Chinnanman Traders] Bricks is a leading manufacturing and construction company specializing in the production of high-quality bricks for diverse construction needs. With a commitment to excellence and innovation, we offer a wide range of brick solutions tailored to meet the demands of modern construction projects.
            </p>
            <p>
              <b>Why Choose SCT Bricks:</b>
            </p>
            <ul>
              <li>
                <b>Quality Assurance:</b> Our bricks undergo rigorous testing to meet industry standards and exceed customer expectations for performance and durability.
              </li>
              <li>
                <b>Innovation:</b> We continuously invest in research and development to introduce new products and technologies that enhance the efficiency and sustainability of construction practices.
              </li>
              <li>
                <b>Customer Focus:</b> With a focus on building lasting partnerships, we provide personalized service and support to help our clients achieve their project goals efficiently and cost-effectively.
              </li>
            </ul>
            <p>
              At SCT Bricks, we are dedicated to delivering reliable and sustainable solutions that contribute to the success of every construction project.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" /> {/* Use the imported image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
