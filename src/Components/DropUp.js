import React from "react";
import { useState } from "react";
import "./styles/DropUp.css";

const DropUp = ({ dHandler }) => {
  const [Day, setDay] = useState("Day");
  const dayHandler = (d) => {
    setDay(d);
    dHandler(d);
  };
  return (
    <div className="btn-group dropdown z-3"style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.44))" }}>
      <button type="button" className="btn dropdown-toggle btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false">
        {Day}
      </button>
      <ul className="dropdown-menu ">
        <li><a className="dropdown-item" onClick={()=>dayHandler("Mon")}>Mon</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Tue")}>Tue</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Wed")}>Wed</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Thu")}>Thu</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Fri")}>Fri</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Sat")}>Sat</a></li>
        <li><a className="dropdown-item" onClick={()=>dayHandler("Sun")}>Sun</a></li>
      </ul>
    </div>
  )
};

export default DropUp;
