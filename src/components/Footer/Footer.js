import React from "react";
import "./FooterStyle.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-center">
        <div className="contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>
                <AiOutlinePhone />
              </span>
              777 999 888
            </li>
            <li>
              <span>
                <AiOutlineMail />
              </span>
              contact@snowshop.com
            </li>
          </ul>
        </div>
        <div>
          <h4>Info</h4>
          <ul>
            <li>Rules</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="socials">
          <h4>Join our social media</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
