import React, { useEffect,useContext } from "react";
import "./styles/Stopwatch.css";
import Button from "./Button";
import startBtn from "./images/pause.png";
import stopBtn from "./images/stop.png";
import resetBtn from "./images/reset.png";
import "./styles/Animations.css";
import { useState } from "react";
import { stopwatchContext } from "./PageContent";
const StopWatch = ({stopWatchDataHandler}) => {

  
  const stopwatchData=useContext(stopwatchContext);

  const [millis, setMillis] = useState(stopwatchData.MilliSeconds);
  const [seconds, setSeconds] = useState(stopwatchData.Seconds);
  const [minutes, setMinutes] = useState(stopwatchData.Minutes);
  const [hours, setHours] = useState(stopwatchData.Hours);
  const [flag, setflag] = useState(false);
  const [reset, setreset] = useState(false);
//! ---------------------------------------------------- Helper Functions
  function setToDefault() {
    setMillis(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setreset(false);
    stopWatchDataHandler( {Hours: 0, Minutes: 0, Seconds: 0, MilliSeconds:0})
  }

  function adjust_0(number) {
    return number < 10 ? "0" + number : number;
  }
//! ---------------------------------------------------- Handlers
  const resetclickHandler = () => {
    setreset(true);
    setflag(false);
  };
  const stopClickHandler = () => {
    setflag(false);
  };
  const startCLickHandler = () => {
    setflag(true);
  };

//! ---------------------------------------------------- UseEffect
  useEffect(() => {
    const incMillis = () => {
      setMillis((prv) => prv + 1);
      if (millis == 99) {
        setMillis(0);
        setSeconds((prv) => prv + 1);
        if (seconds == 60) {
          setSeconds(0);
          setMinutes((prv) => prv + 1);
          if (minutes == 60) {
            setMinutes(0);
            setHours((prv) => prv + 1);
          }
        }
      }
      stopWatchDataHandler( {Hours: hours, Minutes: minutes, Seconds: seconds, MilliSeconds:millis})
    };

    if (reset == true) setToDefault();
    if (flag == true) {
      const millisInterval = setInterval(incMillis, 10);
      return () => {
        clearInterval(millisInterval);
      };
    }
  }, [flag, reset, millis]);

//! ---------------------------------------------------- Handlers
  return (
    <div className="row stopwatch fade-in">
      <div className="col-9 align-self-center text-center glassMorphism py-4">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <div className="stopwatchTime">
              <p className="m-0">{`${adjust_0(hours)}:${adjust_0(
                minutes
              )}:${adjust_0(seconds)}:${adjust_0(millis)}`}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3" onClick={startCLickHandler}>
            <Button imgUrl={startBtn} text="Start"></Button>
          </div>
          <div className="col-3" onClick={stopClickHandler}>
            <Button imgUrl={stopBtn} text="Stop"></Button>
          </div>
          <div className="col-3" onClick={resetclickHandler}>
            <Button imgUrl={resetBtn} text="Reset"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
