import React, { useState } from "react";
import "../styles/Slice2.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoLockOpenOutline } from "react-icons/io5";

const Slice2 = ({ activeFollowing, changeActiveFollowing, followingList }) => {
    return (
        <div className="slice2">
            <Profile
                activeFollowing={activeFollowing}
                changeActiveFollowing={changeActiveFollowing}
                followingList={followingList}
            />
            <div className="bar">
                <div className="active br20">Posts</div>
                <div>Overview</div>
                <div>Goals</div>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    );
};

const Profile = ({ activeFollowing, changeActiveFollowing, followingList }) => {
    const [followStatus, setFollowStatus] = useState(true);
    const followedContent = (
        <div
            className="follow-status"
            onClick={() => {
                setFollowStatus(false);
            }}
        >
            <FaCheck />
            <div className="status-text">Following</div>
        </div>
    );
    const unFollowedContent = (
        <div
            className="follow-status"
            onClick={() => {
                setFollowStatus(true);
            }}
        >
            <div className="status-text" style={{ padding: "0 10px" }}>
                Follow
            </div>
        </div>
    );

    return (
        <div className="profile-container">
            <div className="profile-links">
                <div className="profile-links-left">
                    <FaTwitter className="link-icon" />
                    <FaFacebookF className="link-icon" />
                    <FaYoutube className="link-icon" />
                    <AiFillInstagram className="link-icon" />
                </div>

                <div className="profile-links-right">
                    <CiMail className="link-icon" />
                    {followStatus ? followedContent : unFollowedContent}
                </div>
            </div>
            <img
                src={followingList[activeFollowing].coverURL}
                alt="cover-photo"
                className="profile-cover-photo"
            />
            <img
                src={followingList[activeFollowing].profileURL}
                alt="profile"
                className="desc-profile-image"
            />
            <h2 className="desc-username">
                {followingList[activeFollowing].username}
            </h2>
            <p className="desc-address">
                {followingList[activeFollowing].address}
            </p>
            <p style={{ color: "orangered", fontWeight: "bold" }}>
                {followingList[activeFollowing].subscribersCount}
            </p>
            <p>Subscribers</p>
        </div>
    );
};

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
                    <div className="lock">
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

export default Slice2;
