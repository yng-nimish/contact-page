import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import { BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>OUR COMPANY</span>
            <span>About Us</span>
            <span>Careers</span>
            <span>Our Guarantee</span>
            <span></span>
          </div>
          <div className="footer-section-columns">
            <span>CUSTOMER SERVICE </span>
            <span>Contact Us</span>
            <span>Application Download</span>
            <span>Book</span>
            <span>Technical Papers</span>
          </div>
          <div className="footer-section-columns">
            <span>PURCHASE ORDERS</span>
            <span>Buy a Token</span>
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns-2">
            <span>Follow Us on</span>
            <span className="footer-icons">
              <FaFacebookF />
              <BsTwitter />

              <BsYoutube />
              <SiLinkedin />
            </span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright Ã‚Â© 2024 https://www.yournumberguaranteed.com/</span>
      </div>
    </div>
  );
};

export default Footer;
