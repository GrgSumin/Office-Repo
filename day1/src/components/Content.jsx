import React from "react";
import "./styles/Content.css";
import Bg from "../assets/background.jpg";
import James from "../assets/James.jpg";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { FaTiktok, FaCheck } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import USFlag from "../assets/usa.png";
import Cover from '../assets/albumCover.jpg'
import { MdLock } from "react-icons/md";

const Content = () => {
  return (
    <div className="content">
      <div className="channelImage">
        
          <img src={Bg} alt="coconut" />
        
      </div>

      <div className="channelOwner">
        <img src={James} alt="James Arthur" />
      </div>

      <div className="channelInfo">
        <div className="socialIcons">
          <IoLogoTwitter className="socialIcon" />
          <IoLogoFacebook className="socialIcon" />
          <IoLogoYoutube className="socialIcon" />
          <FaTiktok className="socialIcon" />
        </div>
        <div className="channelDesc">
          <div className="name">James Arthur</div>
          <div className="job">
            Musician From US
            <img src={USFlag} style={{ width: "18px" }} alt="US" />{" "}
          </div>
          <div className="subsCount">9999</div>
          <div className="subs">Subscribers</div>
        </div>

        <div className="followIcons">
          <CiMail className="socialIcon" />
          <div className="followingBtn">
            <FaCheck style={{ marginRight: "5px" }} />
            <div>Following</div>
          </div>
        </div>
      </div>

      <div className="pageBtn">
        <div className="menus">
            <a href="" className="postsActive">Posts</a>
            <a href="">Overview</a>
            <a href="">Goals</a>
        </div>
      </div>

    <div className="albumInfo">
      <div className="firstLine">
        <div className="single">Single from my first studio album</div>
        <div className="timestamp">12 Jul, 6:30 pm</div>
      </div>
      <div className="hear">
        Be the first to hear my song from my new album
      </div>
      <div className="albumCover">
        <img src={Cover} alt="Music" className="" />
      </div>
      <div className="payFirst">
        <div className="unlock">
          <MdLock size={20} style={{marginRight:"8px"}} /> Unlock this post
        </div>
        <div className="subsBtn">
          <button className="superBtn btn">SuperListener for $12/month</button>
          <button className="buyBtn btn">Buy for $4</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Content;
