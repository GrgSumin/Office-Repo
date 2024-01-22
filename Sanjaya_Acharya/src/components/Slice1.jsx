import React, { useState } from "react";
import "../styles/Slice1.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";

const activeColor = "#eee";
const passiveColor = "transparent";

const Slice1 = ({ activeFollowing, changeActiveFollowing, followingList }) => {
    const menuItems = [
        {
            id: 0,
            name: "Feed",
            icon: <IoHomeOutline className="menu-icon" />,
        },
        {
            id: 1,
            name: "Explore",
            icon: <IoFlashOutline className="menu-icon" />,
        },
        {
            id: 2,
            name: "Messages",
            icon: <FiMessageCircle className="menu-icon" />,
        },
        {
            id: 3,
            name: "Settings",
            icon: <FaGear className="menu-icon" />,
        },
    ];

    return (
        <div className="slice1">
            <div className="fixed-div">
                <div className="menu-container">
                    <Menu menuItems={menuItems} />
                </div>
                <h2>Followings</h2>
                <div className="followings-container">
                    <Followings
                        followingList={followingList}
                        activeFollowing={activeFollowing}
                        changeActiveFollowing={changeActiveFollowing}
                    />
                </div>
                <footer className="slice1-footer">© 2020 - 2023</footer>
            </div>
        </div>
    );
};

const Menu = ({ menuItems }) => {
    const [activeId, setActiveId] = useState(0);

    return menuItems.map((item) => (
        <div
            key={item.id}
            className="menu-box"
            onClick={() => setActiveId(item.id)}
            style={{
                backgroundColor:
                    activeId === item.id ? activeColor : passiveColor,
            }}
        >
            {item.icon}
            <div>{item.name}</div>
        </div>
    ));
};

const Followings = ({
    followingList,
    activeFollowing,
    changeActiveFollowing,
}) =>
    followingList.map((user) => (
        <div
            key={user.id}
            className="followings-userbox"
            onClick={() => changeActiveFollowing(user.id)}
            style={{
                backgroundColor:
                    activeFollowing === user.id ? activeColor : passiveColor,
            }}
        >
            <img
                src={user.profileURL}
                alt={user.username}
                className="followings-profile-image"
            />
            <div className="following-username">{user.username}</div>
        </div>
    ));
export default Slice1;
