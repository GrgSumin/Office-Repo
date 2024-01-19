import React from "react";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import HeroSection from "./Components/HeroSection";
import "./App.css";
import RightSidebar from "./Components/RightSidebar";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <HeroSection />
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
