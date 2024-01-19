import React from "react";
import "../styles/MainContent.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoLockOpenOutline } from "react-icons/io5";

const Post = () => {
    return (
        <div className="post">
            <div className="post-header">
                <h4>Single from my first studio album</h4>
                <p className="cgrey">12 July, 6:30 pm</p>
            </div>
            <div className="cgrey">
                Be the first to hear my songs from my new studio album
            </div>
            <img
                src="https://i.ibb.co/QX81fMH/ltm.png"
                alt="Post Image"
                className="post-image"
            />
            <div className="post-footer">
                <div className="lock-container">
                    <div className="active lock">
                        <IoLockOpenOutline className="lock-icon" />
                    </div>
                    <p>Unlock this post</p>
                </div>
                <div className="post-footer-btns">
                    <div className="p-f-btn bgc-native">
                        Superlistener for $12/month
                    </div>
                    <div className="p-f-btn active">Buy for $4</div>
                </div>
            </div>
        </div>
    );
};
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
                <p className="desc-address">
                    <span>Musician from CA</span>{" "}
                    <LiaFlagUsaSolid style={{ color: "red" }} />
                </p>
                <p style={{ color: "orangered", fontWeight: "bold" }}>2310</p>
                <p>Subscribers</p>
            </div>
            <div className="link-bar">
                <div className="l-b-links active">Posts</div>
                <div className="l-b-links">Overview</div>
                <div className="l-b-links">Goals</div>
            </div>
            <Post />
        </div>
    );
};

export default MainContent;
