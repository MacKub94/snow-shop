import React from "react";
import "./InfoStyle.scss";
import { MdLocalShipping } from "react-icons/md";
import { GiConfirmed, GiReturnArrow } from "react-icons/gi";

const Info = () => {
  return (
    <section className="info">
      <div className="info-center">
        <div className="info-container">
          <MdLocalShipping className="info-icon" />
          <h3>Free Shipping</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.
          </p>
        </div>
        <div className="info-container">
          <GiReturnArrow className="info-icon" />
          <h3>30 day return</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.
          </p>
        </div>
        <div className="info-container">
          <GiConfirmed className="info-icon" />
          <h3>Two-years guarantee</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
