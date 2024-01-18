import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import LeftSide from "./Components/LeftSide";
import MainPage from "./Components/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="Main">
        <div className="left">
          <LeftSide />
        </div>
        <div className="middle">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
