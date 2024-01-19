import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFlagUsa } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RiLockUnlockFill } from "react-icons/ri";

function MainPage() {
  const myFeed = [
    {
      topic: "Single from my first stidio album",
      caption: "Be the first to hear my song from my new studio album",
      date: "12 july, 6:30 pm",
      imageUrl:
        "https://artaistry.com/cdn/shop/products/artistic-pop-art-dramatic-beach-painting-with-clouds-and-reflective-water-artaistry-ai-art-canvas-print.jpg?crop=center&height=600&v=1682566889&width=600",
    },
    {
      topic: "Single from my first stidio album",
      caption: "Be the first to hear my song from my new studio album",
      date: "12 june, 7:30 pm",
      imageUrl:
        "https://artaistry.com/cdn/shop/products/artistic-pop-art-dramatic-beach-painting-with-clouds-and-reflective-water-artaistry-ai-art-canvas-print.jpg?crop=center&height=600&v=1682566889&width=600",
    },
  ];

  return (
    <div className="containers">
      <div className="bigImg">
        <img
          src="https://media.istockphoto.com/id/1013321944/vector/sunset-sky-and-palm-trees.jpg?s=612x612&w=0&k=20&c=_sPpjLxcqDFFOXSdPc0MndNWeuXConLBF2AZMiBsNrA="
          alt="coverphoto"
          height="200px"
          width="600px"
          className="coverPhoto"
        />
      </div>
      <div className="Links">
        <div className="social">
          <ul>
            <li className="socials">
              <FaTwitter />
            </li>
            <li className="socials">
              <FaFacebookF />
            </li>
            <li className="socials">
              <FaYoutube />
            </li>
            <li className="socials">
              <AiFillInstagram />
            </li>
          </ul>
        </div>
        <div className="profilePic">
          <img
            src="https://t4.ftcdn.net/jpg/00/53/27/95/360_F_53279590_nZEWHROhMNOCAP04KWTqrbw6dWdqJDfw.jpg"
            alt="profilepc"
            height="100px"
            width="100px"
            className="profilePhoto"
          />

          <h3>James Bond</h3>
          <div className="flag">
            <h4>Musician From CA</h4>
            <FaFlagUsa />
          </div>
          <h3 style={{ color: "orangered" }}>2 310</h3>
          <h4>Suscribers</h4>
        </div>
        <div className="msg">
          <ul>
            <li>
              <MdOutlineLocalPostOffice />
            </li>
            <li>
              <FaCheck />
              Following
            </li>
          </ul>
        </div>
      </div>
      <div className="activities">
        <ul>
          <li
            style={{
              backgroundColor: "black",
              color: "#efeaea",
              borderRadius: "30px",
              width: "50px",
              padding: "6px",
            }}
          >
            Posts
          </li>
          <li>Overview</li>
          <li>Goals</li>
        </ul>
      </div>
      {myFeed.map((feed) => (
        <div className="myPost">
          <div className="album">
            <h3>{feed.topic}</h3>
            <h5 style={{ color: "gray" }}>{feed.date}</h5>
          </div>
          <h5 style={{ color: "gray" }}>{feed.caption}</h5>
          <div className="myAlbum">
            <img src={feed.imageUrl} alt="album" height="300px" width="100%" />
          </div>
          <div className="lock">
            <div className="unlock">
              <ul>
                <li>
                  <RiLockUnlockFill />
                </li>
                <li>Unlock this post </li>
              </ul>
            </div>
            <div className="payment">
              <button className="b1">Superlistener for $12/months</button>
              <button className="b2">Buy for $4</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
