import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footercont">
      <div className="footer">
        <section className="leftfooter">
          <div>
            {" "}
            <p>&copy; 2023 ClearLink. All rights reserved.</p>
          </div>
        </section>
        <section className="rightfooter">
          <div>
            <a href="#">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a href="#">
              {" "}
              <FaTwitter />{" "}
            </a>
            <a href="#">
              {" "}
              <FaFacebook />{" "}
            </a>
            <a href="#">
              {" "}
              <FaInstagram />{" "}
            </a>
            <a href="#">
              {" "}
              <FaGithub />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
