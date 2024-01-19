import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import "../styles/Sidebar.css";

const Menu = () => {
    const [activeID, setActiveID] = useState(0);
    const activeColor = "#ccc";
    const passiveColor = "transparent";
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
        <div className="menu-container">
            {menuItems.map((item) => (
                <div
                    key={item.id}
                    className="menu-box"
                    onClick={() => setActiveID(item.id)}
                    style={{
                        backgroundColor:
                            activeID === item.id ? activeColor : passiveColor,
                    }}
                >
                    {item.icon}
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    );
};

const Followings = ({}) => {
    const followings = [
        {
            userId: 0,
            username: "John Cena",
            pictureURL:
                "https://wallpapers.com/images/hd/wwe-superstar-john-cena-salute-pose-1wjy5h85xen7t0lr.jpg",
        },
        {
            userId: 1,
            username: "Handsome Hunk",
            pictureURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn65sexiOS00kemYRvj5ATe73c4aAVAC2XLpPrqxL0fA&s",
        },
        {
            userId: 2,
            username: "Mo Salah",
            pictureURL:
                "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=hOje16Dr",
        },
        {
            userId: 3,
            username: "Nami Swaaaa",
            pictureURL:
                "https://img.freepik.com/premium-photo/beautiful-girl-ao-dai-viet-nam_43285-18.jpg?w=360",
        },
        {
            userId: 4,
            username: "Erik Lawrance",
            pictureURL:
                "https://www.shutterstock.com/image-photo/young-attractive-man-looks-seriously-260nw-1738162157.jpg",
        },
    ];

    return (
        <div className="followings-scroll">
            {followings.map((item, index) => (
                <div key={index} className="userbox">
                    <img src={item.pictureURL} alt={item.username} />
                    <div className="following-username">{item.username}</div>
                </div>
            ))}
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Menu />
            <div className="followings">
                <h1>Followings</h1>
                <Followings />
            </div>
        </div>
    );
};

export default Sidebar;
