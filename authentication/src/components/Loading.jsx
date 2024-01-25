import React from "react";
import "../styles/Loading.css";

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="disc d1"></div>
            <div className="disc d2"></div>
            <div className="disc d3"></div>
            <div className="disc d4"></div>
            <div className="text">LOADING</div>
        </div>
    );
};

export default Loading;
