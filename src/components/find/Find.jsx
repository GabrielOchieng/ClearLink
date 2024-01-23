import React from "react";
import "./find.css";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import clearlink from "../../assets/clearlinkimg.png";

const Find = () => {
  return (
    <div className="find">
      <section className="clearlink ">
        <div>
          <img src={clearlink} alt="" />
        </div>
        <div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
      </section>
      <section className="guides">
        <div className="guideitems">
          <h6>Product</h6>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="guideitems">
          <h6>Company</h6>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="guideitems">
          <h6>Resources</h6>
          <ul>
            <li>Blog</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="guideitems">
          <h6>Legal</h6>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
      <section className="playstore">
        <div className="title">
          <h3>
            <a href="#">Get the app</a>
          </h3>
        </div>
        <div className="images">
          <img src={appstore} alt="Appstore" />
          <img src={playstore} alt="Playstore" />
        </div>
      </section>
    </div>
  );
};

export default Find;
