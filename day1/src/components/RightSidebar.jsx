import React from "react";
import "./styles/Sidebar.css";
import Mic from "../assets/mic.png";
import Speaker from "../assets/speaker.png";
import Mic1 from "../assets/mic1.png";

const RightSidebar = () => {
  const priceObj = [
    {
      image: Mic,
      title: "Basic Listener",
      price: "$3.00/month",
      desc: "Lorem  sit ametique temporibus. Sit nulla rerum, magnam sapiente ",
      bg: "#FFF1D5",
      subs: true,
    },
    {
      image: Speaker,
      title: "VIP Listener",
      price: "$5.00/month",
      desc: "H temporibus. Sit nulla rerum, magnam sapiente ",
      bg: "#D6F6EA",
      subs: false,
    },
    {
      image: Mic1,
      title: "Super Listener",
      price: "$12.00/month",
      desc: "A atque numquam ex sapiente ut similique temporibus sapiente ",
      bg: "#E3F3FF",
      subs: false,
    },
  ];
  // console.log(priceObj)
  return (
    <div className="rightSidebar">
      <div className="title">Subscription Tiers</div>
      <div className="pricingBar">
        {priceObj.map((item) => (
          <div className="singleItem" key={item.title}>
            <div className="bg" style={{ backgroundColor: `${item.bg}` }}>
              <div className="priceDetail">
                <div className="priceTitle">{item.title}</div>
                <div className="priceActual">{item.price}</div>
              </div>
              {/* {console.log(item)} */}

              <div className="image">
                <img src={item.image} alt="Mike" />
              </div>
            </div>
            <div className="describe">{item.desc}</div>
            {item.subs ? (
              <div className="btnSubs" style={{ backgroundColor: "pink" }}>
                Subscribed
              </div>
            ) : (
              <div className="btnSubs" style={{ backgroundColor: "red" }}>
                Subscribed
              </div>
            )}
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default RightSidebar;
