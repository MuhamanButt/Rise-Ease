import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/AlarmInfoComponent.css";

const AlarmInfoComponent = ({object,setStatusHandler}) => {
  const [Status, setStatus] = useState(object.status);
  const onOffHandler = () => {
    if (object.status == "ON") {
      setStatusHandler("OFF",object.id);
      setStatus("OFF")
      document.getElementById(object.id).classList.remove("main-active");
      document.getElementById(object.id).classList.add("main-inactive");
    } else {
      setStatusHandler("ON",object.id);
      setStatus("ON")
      document.getElementById(object.id).classList.remove("main-inactive");
      document.getElementById(object.id).classList.add("main-active");
    }
  };
  const getRealHour = (h, tz) => {
    if (tz == "PM" && h == 12) return 12;
    if (tz == "PM") return h + 12;
    if (tz == "AM" && h == 12) return 0;
    else return h;
  };
  const checkALarm = () => {
    let ele = document.getElementById(object.id);
    if (ele && ele.classList.contains("main-active")) {
      let x = new Date();
      let RealHours = getRealHour(object.hour, object.timeZone);
      if (
        RealHours == x.getHours() &&
        object.minute == x.getMinutes() &&
        object.day == convertToDay(x.getDay())&&
        object.status=="ON"
      ) {
        document.getElementById(object.id).classList.remove("main-inactive");
        document.getElementById(object.id).classList.remove("main-active");
        document.getElementById(object.id).classList.add("main-beeped", "shake-bottom");
      }
    }
  };
  function convertToDay(number) {
    let day = "Sun";
    if (number == 0) day = "Sun";
    else if (number == 1) day = "Mon";
    else if (number == 2) day = "Tue";
    else if (number == 3) day = "Wed";
    else if (number == 4) day = "Thu";
    else if (number == 5) day = "Fri";
    else if (number == 6) day = "Sat";
    return day;
  }
  const setActiveDay = (d) => {
    let query = `.dayList .day-list ul #${d}`;
    let ele = document.getElementById(object.id).querySelector(query).classList.add("active-day");
  };
  useEffect(() => {
    setActiveDay(object.day);
    setInterval(() => checkALarm(), 1000);
  }, [Status]);

 
  return (
    <div className={`col-10 col-md-5 col-sm-7 mt-2 py-2 main main-${object.status == "ON" ? "active" : "inactive"}`} id={object.id}>
      <div className="row">
        <div className="col-8 time-col">
          <p className="m-0 text-color-active">
            {object.hour < 10 ? "0" + object.hour : object.hour}:
            {object.minute < 10 ? "0" + object.minute : object.minute} {object.timeZone}
          </p>
        </div>
        <div className="col-4 text-center align-self-center ">
          <button className="status-button" onClick={onOffHandler}>
            {object.status}
          </button>
        </div>
      </div>
      <div className="row dayList">
        <div className="col day-list">
          <ul className="p-0">
            <li id="Mon">Mon</li>
            <li id="Tue">Tue</li>
            <li id="Wed">Wed</li>
            <li id="Thu">Thu</li>
            <li id="Fri">Fri</li>
            <li id="Sat">Sat</li>
            <li id="Sun">Sun</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlarmInfoComponent;
