import React from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import "./styles/Navbar.css";
import John from '../assets/john.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logoImage">
          <div className="outerCircle"></div>
          <div className="innerCircle"></div>
        </div>
        <div className="logoName">MyContent</div>
      </div>
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          name=""
          id=""
          placeholder="Find authors..."
        />
        <IoMdSearch className="searchIcon" size={22} />
      </div>

      <div className="profileInfo">
      <button className="creatorBtn"> Become a creator</button>
        <div className="notificationButton">
          <IoIosNotifications size={30} />
        </div>
        <div className="name">Rick Lynch</div>
        <div className="profile">
          <img src={John} className="profileImage" alt="John Doe" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
