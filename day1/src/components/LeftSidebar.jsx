import React from "react";
import "./styles/Sidebar.css";
import {
  IoHomeOutline,
  IoFlashOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";
import Hero from "../assets/hero.jpg";
import Hero1 from "../assets/hero1.jpeg";
import Hero2 from "../assets/hero2.jpg";
import Heroine from "../assets/heroine.jpg";
import Heroine1 from "../assets/heroine1.jpeg";
import Heroine2 from "../assets/heroine2.jpeg";
import '../App.css'

const Sidebar = () => {
  const icons = [
    {
      icon : IoHomeOutline,
      title: "Feed"
    },
    {
      icon : IoFlashOutline,
      title: "Explore"
    },
    {
      icon : IoChatbubblesOutline,
      title: "Messages"
    },
    {
      icon : TbSettings2,
      title: "Settings"
    },
  ]
  const allFollowers = [
    {
      image: Hero,
      name: "Elon Jung",
    },
    {
      image: Hero1,
      name: "Hairan Thapa",
    },
    {
      image: Hero2,
      name: "Taylor GC",
    },
    {
      image: Heroine,
      name: "Selena Gurung",
    },
    {
      image: Heroine1,
      name: "Robert Shah",
    },
    {
      image: Heroine2,
      name: "Adele Nepali",
    },
  ];

  return (
    <div class="sidenav">
      <div className="menu">
        {icons.map((item) =>(
          <a>
            <item.icon /> {item.title}
          </a>
        ))

        }
        
      </div>

      <div className="following">

        <div className="followingTitle">Following</div>

        <div className="followingList">

          {allFollowers.map((item) => (
            <div className="singleFollower" key={item.image}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Sidebar;
