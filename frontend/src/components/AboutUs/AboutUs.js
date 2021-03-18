import React from "react";
import "./AboutUsStyle.scss";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-center">
        <img src={about1} alt="aboutimage" className="about-image1" />
        <div className="about-us-info">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint modi
            eum a itaque reprehenderit, dignissimos nisi temporibus impedit nam
            earum debitis minima exercitationem quasi voluptas incidunt nihil
            voluptate? Facere, neque eos. Exercitationem, nesciunt sit
            architecto veritatis suscipit quibusdam! Optio ea aspernatur laborum
            exercitationem. Architecto eaque sapiente, quasi laborum dolor
            similique.
          </p>
        </div>
        <img src={about2} alt="aboutimage" className="about-image2" />
      </div>
    </section>
  );
};

export default AboutUs;
