import React from "react";
import "./styles/Clock.css";
import "./styles/Animations.css";
import Time from "./Time";
const Clock = () => {
  return (
    <div className="row position-absolute top-50 start-50 translate-middle w-75 m-0 fade-in">
      <div className="col align-self-center">
        <div className="row clock-main">
          <div className="col clock">
            <Time></Time>
          </div>
        </div>
        <div className="row clock-main-text">
          <div className="col p-0">
            <p className="fs-1 mt-1"> Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
