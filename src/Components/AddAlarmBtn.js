import React from "react";
import addBtn from "./images/add.png";
import "./styles/AddAlarmButton.css";
import "./styles/Animations.css";

const AddAlarmBtn = ({ handler }) => {
  return (
    <div className="row button position-fixed start-50">
      <div className="col p-0 text-center">
        <img src={addBtn} alt="" onClick={handler} />
      </div>
    </div>
  );
};

export default AddAlarmBtn;
