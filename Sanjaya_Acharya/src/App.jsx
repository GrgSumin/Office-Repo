import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import "./App.css";

const App = () => {
    const [activeFollowing, setActiveFollowing] = useState(0);

    return (
        <div>
            <Navbar />
            <MainPage
                activeFollowing={activeFollowing}
                changeActiveFollowing={setActiveFollowing}
            />
        </div>
    );
};

export default App;
