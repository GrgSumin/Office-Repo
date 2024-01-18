import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

function LeftSide() {
  return (
    <div className="SideBar">
      <div className="topics">
        <div className="topic items">
          <IoHomeOutline />
          <h5>Feed</h5>
        </div>
        <div className="topic items">
          <IoFlashOutline />
          <h5>Explore</h5>
        </div>
        <div className="topic items">
          <FiMessageCircle />
          <h5>Messages</h5>
        </div>
        <div className="topic items">
          <FaGear />
          <h5>Settings</h5>
        </div>
      </div>
      <div className="following">
        <h2>Following</h2>
        <div className="photos">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-girl-ao-dai-viet-nam_43285-18.jpg?w=360"
            alt="users"
            height="40px"
            width="35px"
            className="img2"
          />
          <h5>Nami swaaaa</h5>
        </div>
        <div className="photos">
          <img
            src="https://www.shutterstock.com/image-photo/young-attractive-man-looks-seriously-260nw-1738162157.jpg"
            alt="users"
            height="40px"
            width="35px"
            className="img2"
          />
          <h5>Rick Lynch</h5>
        </div>
        <div className="photos">
          <img
            src="https://wallpapers.com/images/hd/wwe-superstar-john-cena-salute-pose-1wjy5h85xen7t0lr.jpg"
            alt="users"
            height="40px"
            width="35px"
            className="img2"
          />
          <h5>John Cena</h5>
        </div>
        <div className="photos">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn65sexiOS00kemYRvj5ATe73c4aAVAC2XLpPrqxL0fA&s"
            alt="users"
            height="40px"
            width="35px"
            className="img2"
          />
          <h5>Handsome Hunk</h5>
        </div>
        <div className="photos">
          <img
            src="https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=hOje16Dr"
            alt="users"
            height="40px"
            width="35px"
            className="img2"
          />
          <h5>Mo Salah</h5>
        </div>
      </div>
      <div className="footer">
        <h4> &copy; 2020-2023</h4>
      </div>
    </div>
  );
}

export default LeftSide;
