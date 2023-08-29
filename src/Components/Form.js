import React from "react";
import InputButton from "./InputButton";
import DropUp from "./DropUp";
import RadioButton from "./RadioButton";
import closeBtn from "./images/close.png";
import "./styles/Animations.css";
import "./styles/Form.css";

const Form = ({ AddAlarmHandler, crossHandler, hourHandler, minHandler, dayHandler, TimeZoneHandler}) => {
  const CrossHandler = () => crossHandler();
  const addAlarmHandler = () => AddAlarmHandler();
  const HourHandler = (h) => hourHandler(h);
  const MinHandler = (m) => minHandler(m);
  const DayHandler = (d) => dayHandler(d);
  const timeZoneHandler = (t) => TimeZoneHandler(t);

  return (
    <div className="row justify-content-center m-0 position-relative fade-in z-3 ">
      <div className="col-10 m-0 position-absolute">
        <form action="">
          <div className="row">
            <div className="col text-end form-close-button" onClick={CrossHandler}>
              <img src={closeBtn} className="closeBtn"></img>
            </div>
          </div>
          <div className="row justify-content-center m-0">
            <InputButton placeholder={"Hour"} type={"number"} handler={HourHandler} colSize={5}></InputButton>
            <InputButton placeholder={"Min"} type={"number"} handler={MinHandler} colSize={5} ></InputButton>
            <br />
            <div className="col-5">
              <DropUp dHandler={DayHandler}></DropUp>
            </div>
            <div className="col-5  text-center align-self-center radios">
              <div className="row">
                <div className="col-10 col-sm-5">
                  <RadioButton description={"AM"} onclick={timeZoneHandler}></RadioButton>
                </div>
                <div className="col-10 col-sm-5">
                  <RadioButton description={"PM"} onclick={timeZoneHandler}></RadioButton>
                </div>
              </div>
            </div>
            <br />
            <button type="button" className="btn btn-outline-info w-50 mt-3 mb-3" onClick={addAlarmHandler} style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.44))" }}>
              Add Alarm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
