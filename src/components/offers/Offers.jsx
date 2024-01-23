import React from "react";

import { BsCheck2 } from "react-icons/bs";

import beuimg from "../../assets/beuimg.png";
import "./offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <section className="offersleft">
        <div className="offerhead">
          <h2>
            Ready to clear the path to <br /> perfect communication?
          </h2>
        </div>
        <div className="offerlist">
          <ul>
            <li>
              {" "}
              <BsCheck2 className="tickicon" /> 30 days free trial
            </li>
            <li>
              {" "}
              <BsCheck2 className="tickicon" /> Cancel at any time
            </li>
            <li>
              {" "}
              <BsCheck2 className="tickicon" /> Access to all features
            </li>
            <li>
              {" "}
              <BsCheck2 className="tickicon" /> Personalized onboarding
            </li>
          </ul>
        </div>
        <div className="offerbtns">
          <button className="talksales">Talk to sales</button>
          <button className="freetri">Start your free trial</button>
        </div>
      </section>
      <section className="offersright">
        <div className="beuimg">
          <img src={beuimg} alt="image" />
        </div>
      </section>
    </div>
  );
};

export default Offers;
