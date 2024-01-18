import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="page-container">
                <Sidebar />
                <MainContent />
                <Aside />
            </div>
        </div>
    );
};

export default App;
