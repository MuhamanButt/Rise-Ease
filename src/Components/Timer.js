import React from "react";
import { useState, useEffect,useContext } from "react";
import startBtn from "./images/pause.png";
import stopBtn from "./images/stop.png";
import addBtn from "./images/add.png";
import Button from "./Button";
import "./styles/Animations.css";
import "./styles/Timer.css";
import InputButton from "./InputButton";
import { timerContext } from "./PageContent";

const Timer = ({timerDataHandler}) => {
  const timerData=useContext(timerContext);
  let h, m;
  const [seconds, setSeconds] = useState(timerData.Seconds);
  const [minutes, setMinutes] = useState(timerData.Minutes);
  const [hours, setHours] = useState(timerData.Hours);
  const [flag, setflag] = useState(false);
  function adjust_0(number) {
    return number < 10 ? "0" + number : number;
  }
  //! ---------------------------------------------------- Handlers
  const addclickHandler = () => {
    document.getElementById("lower").classList.remove("d-none");
    document.getElementById("timerMain").classList.add("ADDBLURt")
  };
  const stopClickHandler = () => {
    setflag(false);
  };
  const startCLickHandler = () => {
    setflag(true);
  };
  const removeHandler = () => {
    document.getElementById("lower").classList.add("d-none");
    document.getElementById("timerMain").classList.remove("ADDBLURt")
  };
  const hourHandler = (hr = 0) => {
    h = hr;
  };
  const minHandler = (min = 0) => {
    m = min;
  };
  const commitChanges = () => {
    timerDataHandler({ Hours:0, Minutes:0, Seconds:0});
    setHours(Number(h == undefined ? 0 : h));
    setMinutes(Number(m == undefined ? 0 : m) % 60);
    setflag(false);
    document.getElementById("timerMain").classList.remove("ADDBLURt")
  };


  
//! ---------------------------------------------------- UseEffect
  useEffect(() => {
    const decTime = () => {
      if (hours == 0 && minutes == 0 && seconds == 0) {
        setflag(false);
      } else {
        if (seconds == 0) {
          if (minutes == 0) {
            if (hours != 0) {
              setHours((prv) => prv - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes((prv) => prv - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prv) => prv - 1);
        }
      }
      timerDataHandler({ Hours:hours, Minutes:minutes, Seconds:seconds});
    };
    let timeinterval;
    if (flag == true) {
      timeinterval = setInterval(decTime, 1000);
    }
    return () => clearInterval(timeinterval);
  }, [flag, seconds]);


  
//! ---------------------------------------------------- return
  return (
    <div className="row stopwatch fade-in align-self-center ">
      <div className="col-9 align-self-center text-center glassMorphism py-4">
        <div className="row justify-content-center " id="timerMain">
          <div className="col-10 text-center ">
            <div className="stopwatchTime">
              <p className="m-0">{`${adjust_0(hours)}:${adjust_0(
                minutes
              )}:${adjust_0(seconds)}`}</p>
            </div>
          </div>
          <br />
          <div className="col-3" onClick={startCLickHandler}>
            <Button imgUrl={startBtn} text="Start"></Button>
          </div>
          <div className="col-3" onClick={stopClickHandler}>
            <Button imgUrl={stopBtn} text="Stop"></Button>
          </div>
          <div className="col-3" onClick={addclickHandler}>
            <Button imgUrl={addBtn} text="Add"></Button>
          </div>
        </div>
        <div className="row add-menu-row add-menu d-none fade-in" id="lower">
          <div className="col">
            <div className="row justify-content-center">
              <InputButton
                placeholder={"Hour"}
                type={"number"}
                handler={hourHandler}
                colSize={4}
              ></InputButton>
              <InputButton
                placeholder={"Min"}
                type={"number"}
                handler={minHandler}
                colSize={4}
              ></InputButton>
              <br />
              <button
                type="button"
                className="btn btn-outline-info"
                id="add-changes"
                onClick={commitChanges}
              >
                Add
              </button>
            </div>
          </div>
          <div className="col-1 cross-button" onClick={removeHandler}>
            x
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
