import "../styles/Navbar.css";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <div className="logo-outer">
                    <div className="logo-inner"></div>
                </div>
                <div className="logo-name">MyContent</div>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    name="search"
                    placeholder="Find Authors..."
                />
                <IoIosSearch className="icon" />
            </div>

            <button className="become-creator-btn">Become a creator</button>

            <IoMdNotificationsOutline className="notification-icon" />

            <div className="profile">
                <div className="username">Rick Lynch</div>
                <div className="profile-image">
                    <img
                        src="https://img.freepik.com/premium-photo/beautiful-girl-ao-dai-viet-nam_43285-18.jpg?w=360"
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
