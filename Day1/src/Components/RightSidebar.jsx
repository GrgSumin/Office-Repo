import React, { useState } from "react";
import "./Styles/RightSidebar.css";
import Mic from "../assets/mic.jpg";
import Speaker from "../assets/speaker.jpg";
import Headphone from "../assets/headphone.jpg";

const RightSidebar = () => {
  const [isSubscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    setSubscribed(!isSubscribed);
  };
  return (
    <div className="rightSidebar">
      <h1 className="card-topic">Subscription tiers</h1>
      <div className="card1">
        <div className="product1">
          <h3 className="card-header">
            Basic Listener
            <br />
            <span className="price">$3.00/month</span>
          </h3>
          <img src={Mic} height="90px" width="100px" className="mic-image" />
        </div>

        <div className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          itaque ipsa atque placeat maiores optio, error inventore possimus in
          adipisci.
        </div>
        <div className="subscription-btn">
          <button className="sub-btn">Subscribed</button>
        </div>
      </div>
      <div className="card2">
        <div className="product1">
          <h3 className="card-header">
            Basic Listener
            <br />
            <span className="price">$3.00/month</span>
          </h3>
          <img
            src={Speaker}
            height="90px"
            width="100px"
            className="mic-image"
          />
        </div>

        <div className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          itaque ipsa atque placeat maiores optio, error inventore possimus in
          adipisci.
        </div>
        <div className="subscription-btn">
          <button className="sub-btn">Subscribed</button>
        </div>
      </div>
      <div className="card3">
        <div className="product1">
          <h3 className="card-header">
            Basic Listener
            <br />
            <span className="price">$3.00/month</span>
          </h3>
          <img
            src={Headphone}
            height="90px"
            width="100px"
            className="mic-image"
          />
        </div>

        <div className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          itaque ipsa atque placeat maiores optio, error inventore possimus in
          adipisci.
        </div>
        <div className="subscription-btn">
          <button className="sub-btn">Subscribed</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
