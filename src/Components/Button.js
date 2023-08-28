import React from "react";
import "./styles/Button.css";
const Button = ({ imgUrl, text }) => {
  return (
    <div className="simple-button">
      <img src={imgUrl} alt="" className="btn-img" />
      <p className="btn-text">{text}</p>
    </div>
  );
};

export default React.memo(Button);
