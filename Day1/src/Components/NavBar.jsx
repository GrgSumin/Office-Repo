import React from "react";
import { Search, Bell } from "react-feather";
import Pokemon from "../assets/pokemon.png";
import logo from "../assets/Logo.png";
import "./Styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="nav-logo">
          {" "}
          <img src={logo} height="40px" width="40px" />
          <h1 id="nav-logoname">My Content</h1>
        </div>
        <div className="find">
          {" "}
          <input type="text" placeholder="find authors" className="search" />
          <span className="findicon">
            <Search />
          </span>
        </div>
      </div>

      <div className="login">
        <button className="btn">Become a Creator</button>
        <div className="person">
          <span className="bellicon">
            <Bell />
          </span>
          <span></span>
          <h4 className="id">Jack Ryan</h4>
          <img src={Pokemon} alt="img" className="contactimg" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
