import React from "react";
import "./NewsletterStyle.scss";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h3>Join our newsletter and get 10% off!</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Enter your email" />
        <button type="submit">
          <FaEnvelope className="newsletter-icon" />
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
