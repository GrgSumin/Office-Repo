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

            <div className="search-bar none">
                <input
                    className="navItems none"
                    type="text"
                    name="search"
                    placeholder="Find Authors..."
                />
                <IoIosSearch className="icon none" />
            </div>

            <button className="become-creator-btn none">
                Become a creator
            </button>

            <IoMdNotificationsOutline className="notification-icon none" />

            <div className="profile none">
                <div className="username">Sumin Gurung</div>
                <div className="profile-image">
                    <img
                        src="https://i.ibb.co/R2k1z0t/Untitled.png"
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
