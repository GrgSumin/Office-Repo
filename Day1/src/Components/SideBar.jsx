import React from "react";
import "./Styles/SideBar.css";
import { Home, Compass, MessageSquare, Settings } from "react-feather";
import people1 from "../assets/img1.jpeg";
import people2 from "../assets/img2.jpeg";
import people3 from "../assets/img3.jpeg";
import people4 from "../assets/img4.jpeg";
import people5 from "../assets/img5.jpeg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="uppersidebar">
        <div className="sidebarlinks">
          <span className="side-icon">
            <Home />
          </span>
          <p className="sidepage">Feed</p>
        </div>
        <div className="sidebarlinks">
          <span className="side-icon">
            <Compass />
          </span>
          <p className="sidepage">Explore</p>
        </div>
        <div className="sidebarlinks">
          <span className="side-icon">
            <MessageSquare />
          </span>
          <p className="sidepage">Message</p>
        </div>
        <div className="sidebarlinks">
          <span className="side-icon">
            <Settings />
          </span>
          <p className="sidepage">Setting</p>
        </div>
      </div>
      <div className="lowersidebar">
        <div className="headfollow">
          <h2 className="follow">following</h2>
        </div>

        <div className="followrequest">
          <img src={people1} className="peopleid" />
          <h5 className="follwerid">Ram</h5>
        </div>
        <div className="followrequest">
          <img src={people2} className="peopleid" />
          <h5 className="follwerid">shyam</h5>
        </div>
        <div className="followrequest">
          <img src={people3} className="peopleid" />
          <h5 className="follwerid">Lakshman</h5>
        </div>
        <div className="followrequest">
          <img src={people4} className="peopleid" />
          <h5 className="follwerid">Roman reign</h5>
        </div>
        <div className="followrequest">
          <img src={people5} className="peopleid" />
          <h5 className="follwerid">Randy Orton</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
