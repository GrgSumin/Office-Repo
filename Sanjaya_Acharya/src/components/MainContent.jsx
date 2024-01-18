import React from "react";
import "../styles/MainContent.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="desc">
                <div className="links">
                    <FaTwitter className="link-icons" />
                    <FaFacebookF className="link-icons" />
                    <FaYoutube className="link-icons" />
                    <AiFillInstagram className="link-icons" />
                </div>
                <div className="links l-r">
                    <CiMail className="link-icons" />
                    <div className="follow-status">
                        <FaCheck />
                        <div className="status-text">Following</div>
                    </div>
                </div>
                <img
                    src="https://shorturl.at/etQR0"
                    alt="cover-photo"
                    className="desc-cover-photo"
                />
                <img
                    src="https://img.freepik.com/premium-photo/beautiful-girl-ao-dai-viet-nam_43285-18.jpg?w=360"
                    alt="profile"
                    className="desc-profile-image"
                />
                <h2 className="desc-username">James Chambers</h2>
            </div>
        </div>
    );
};

export default MainContent;
