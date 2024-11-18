import React from "react";
import "../styles/TitleBar.css";

const TitleBar = ({ logoSrc, altText = "Logo" }) => {
    return (
        <div className="title-bar">
            <img src={logoSrc} alt={altText} className="title-bar-logo" />
        </div>
    );
};

export default TitleBar;
