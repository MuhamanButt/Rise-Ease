import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/time.css";

const Time = () => {
  const [second, setsecond] = useState(0);
  const [minute, setminute] = useState(0);
  const [hour, sethour] = useState(0);
  function convertHour(h) {
    h = h == 0 ? 12 : h;
    h = h > 12 ? (h %= 12) : h;
    return h;
  }
  useEffect(() => {
    let x = new Date();
    sethour(convertHour(x.getHours()));
    setminute(x.getMinutes());
    setsecond(x.getSeconds());
    const intervalId = setInterval(() => {
      let x = new Date();
      sethour(convertHour(x.getHours()));
      setminute(x.getMinutes());
      setsecond(x.getSeconds());
    }, 1000);
  }, []);
  return (
    <div className="position-absolute top-50 start-50 translate-middle time">
      <p className="m-0">{`${hour < 10 ? "0" + hour : hour}:${
        minute < 10 ? "0" + minute : minute
      }:${second < 10 ? "0" + second : second}`}</p>
    </div>
  );
};

export default Time;
