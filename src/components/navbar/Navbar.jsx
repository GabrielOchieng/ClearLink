import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import "./navbar.css";
import clearlink from "../../assets/clearlinkimg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={clearlink} alt="" />
      </div>
      <div>
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
  );
};

export default Navbar;
