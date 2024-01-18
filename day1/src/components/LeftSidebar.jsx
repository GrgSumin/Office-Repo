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

const Sidebar = () => {
    // const allFollowers = [
    //     {
    //         image: Hero,
    //         name: "Elon Musk"
    //     },
    //     {
    //         image: Hero1,
    //         name: "Elon Musk"
    //     },
    //     {
    //         image: Hero2,
    //         name: "Elon Musk"
    //     },
    //     {
    //         image: Heroine,
    //         name: "Elon Musk"
    //     },
    //     {
    //         image: Heroine1,
    //         name: "Elon Musk"
    //     },
    //     {
    //         image: Heroine2,
    //         name: "Elon Musk"
    //     },
    // ]

    // const imageElements = allFollowers.map((item) => {
    //     return (
    //       <div className="image-container" key={item.image}> 
    //         <img src={item.image} alt={item.name} />
    //         <p>{item.name}</p>
    //         {console.log(item)}
    //       </div>
    //     );
    //   });

  return (
    <div class="sidenav">
      <div className="menu">
        <a href="#">
          <IoHomeOutline /> Feed
        </a>
        <a href="#">
          <IoFlashOutline /> Explore
        </a>
        <a href="#">
          <IoChatbubblesOutline /> Messages
        </a>
        <a href="#">
          <TbSettings2 /> Settings
        </a>
      </div>
      <div className="following">
        <div className="followingTitle">Following</div>
        <div className="followingList">
          <div className="singleFollower">
            {/* <div>
            {allFollowers.map((oneFollower) =>{
                <>
                {/* <img src={oneFollower.image} className="followingImage" alt={oneFollower.name} />
                <div>{oneFollower.name}</div>
                {console.log(oneFollower.image)} */}
                {/* {imageElements}
                </>
            }

            )}
            </div>  */}
            
          <img src={Hero} alt="Elon Jung" />Elon Jung
          </div>
          <div className="singleFollower">
          <img src={Hero1} alt="Ram Lal" />Ram Lal
          </div>
          <div className="singleFollower">
          <img src={Hero2} alt="Mark Bahadur" />Mark Bahadur
          </div>
          <div className="singleFollower">
          <img src={Heroine} alt="Sita Puri" />Sita Puri
          </div>
          <div className="singleFollower">
          <img src={Heroine1} alt="Selena GC" />Selena GC
          </div>
          <div className="singleFollower">
          <img src={Heroine2} alt="Taylor Bhandari" />Taylor Bhandari
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
