// NavbarButton.js
import React from "react";
import "./styles/NavbarButton.css";

const NavbarButton = ({ isActive, imgUrl, title, onClick }) => {
  return (
    <div className={`col-3 navbar-button ${isActive ? "active" : ""}`}>
      <div onClick={onClick}>
        <img src={imgUrl} className="navbarButton-image" alt={title} />
        <br />
        <p className="navbarButton-text">{title}</p>
      </div>
    </div>
  );
};

export default React.memo(NavbarButton);
