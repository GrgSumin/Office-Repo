import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="content">
          <div className="circle"></div>
          <h3 style={{ color: "rgb(180, 84, 49)", fontWeight: "bold" }}>
            MyContent
          </h3>
        </div>
        <div className="search">
          <input
            type="search"
            placeholder="Find authors..."
            style={{
              backgroundColor: "#efeaea",
              borderRadius: "5px",
              height: "40px",
              width: "150%",
              border: "none",
              padding: "10px",
            }}
          />
          <IoMdSearch className="searchI" />
        </div>
        <div className="btn">
          <button> Become a creater</button>
        </div>

        <div className="profile">
          <IoIosNotificationsOutline
            style={{ height: "25px", width: "25px" }}
          />
          <h5>Rick Lynch</h5>
          <img
            src="https://www.shutterstock.com/image-photo/young-attractive-man-looks-seriously-260nw-1738162157.jpg"
            alt="handsome"
            height="40px"
            width="30px"
            className="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
