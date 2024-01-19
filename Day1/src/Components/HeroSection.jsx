import React from "react";
import Pic from "../assets/bg.jpg";
import "./Styles/HeroSection.css";
import Hero from "../assets/img2.jpeg";
import Frame from "../assets/frame.jpeg";
import Girl from "../assets/girl.jpeg";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Check,
  Unlock,
} from "react-feather";

const HeroSection = () => {
  return (
    <div className="mainsection">
      <div className="hero-img">
        <div className="photos">
          {" "}
          <img src={Pic} className="natureimg" height="190px" width="600px" />
          <img src={Hero} className="heroimg" />
        </div>
      </div>
      <div className="socialmedia">
        <div className="medias">
          <span className="iconsmedia">
            {" "}
            <Facebook />
          </span>
          <span className="iconsmedia">
            <Instagram />
          </span>
          <span className="iconsmedia">
            <Twitter />
          </span>
          <span className="iconsmedia">
            <Youtube />
          </span>
        </div>
        <div className="intro">
          <h4 className="author">Jack Ryan</h4>
          <p className="work"> musician from CA</p>
          <p style={{ color: "#da0819" }} className="work">
            2309
          </p>
          <p style={{ color: "#da0819" }} className="work">
            subscribers
          </p>
        </div>
        <div className="mailicon">
          <span>
            <Mail />
          </span>
          <button className="follow-btn">
            <span>
              <Check />
            </span>
            Following
          </button>
        </div>
      </div>
      <div className="buttongroup">
        <div className="btn1">
          <button className="postbtn">Posts</button>
        </div>
        <div className="btn2">
          <button className="overbtn">overviews</button>
        </div>
        <div className="btn3">
          <button className="goalbtn">Goals</button>
        </div>
      </div>
      <div className="lowercontent">
        <div className="album">
          <h4 className="album-head">Single from my first studio album </h4>
          <small className="para">
            Be the first to hear my song from my new studio album
          </small>
        </div>
        <div className="date">
          <p>12 jul,6:30 pm</p>
        </div>
      </div>
      <div className="contentimg">
        <img src={Frame} className="frameimg" height="190px" width="600px" />
        <img src={Girl} className="girlimg" />
      </div>
      <div className="premium">
        <div className="unlock-btn">
          <Unlock />
          unlock this post
        </div>
        <div className="subscribersBtn">superlistener for 12$/month</div>
        <div className="buybtn">Buy for $4</div>
      </div>
    </div>
  );
};

export default HeroSection;
