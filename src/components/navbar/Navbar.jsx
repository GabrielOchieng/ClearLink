import React, { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";
import clearlink from "../../assets/clearlinkimg.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const showNavbar = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div>
        <img src={clearlink} alt="" />
      </div>
      <div className="bigNav">
        <ul>
          <li>
            <h6>Products</h6>
            <BiSolidChevronDown />
          </li>
          <li>
            <h6>Solutions</h6>
            <BiSolidChevronDown />
          </li>
          <li>
            <h6>Resources</h6>
            <BiSolidChevronDown />
          </li>
          <li>
            <h6>Pricing</h6>
          </li>
        </ul>
      </div>
      <div className="buttons bigNavbtns">
        <button className="talksl">Talk to sales</button>
        <button className="sign">Sign up for free</button>
      </div>

      <div onClick={showNavbar} className="nav-btn">
        {!nav ? (
          <FaBars className="iconres" />
        ) : (
          <div className="nav_open">
            <div>
              <FaTimes className="iconres" />
            </div>
            <div className="smallNav">
              <ul>
                <li>
                  <h6>Products</h6>
                  <BiSolidChevronDown />
                </li>
                <li>
                  <h6>Solutions</h6>
                  <BiSolidChevronDown />
                </li>
                <li>
                  <h6>Resources</h6>
                  <BiSolidChevronDown />
                </li>
                <li>
                  <h6>Pricing</h6>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <button className="talksl">Talk to sales</button>
              <button className="sign">Sign up for free</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
