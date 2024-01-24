import React from "react";
import "./items.css";
import shopify from "../../assets/shopify.png";
import coinbase from "../../assets/coinbase.png";
import dropbox from "../../assets/dropbox.png";
import intercom from "../../assets/intercom.png";
import marvel from "../../assets/marvel.png";
import automattic from "../../assets/automattic.png";

const imageStyle = {
  // width: "100px",
  height: "40px",
  marginBottom: "30px",
};

const Items = () => {
  return (
    <div className="items">
      <div className="words">
        Join 1,500+ companies already video conferencing the ClearLink way
      </div>
      <div className="pics">
        <img src={shopify} alt="item" className="itemimg" />
        <img src={coinbase} alt="item" className="itemimg" />
        <img src={dropbox} alt="item" className="itemimg" />
        <img src={intercom} alt="item" className="itemimg" />
        <img
          src={marvel}
          alt="item"
          className="itemimg petty"
          style={imageStyle}
        />
        <img src={automattic} alt="item" className="itemimg" />
      </div>
    </div>
  );
};

export default Items;
