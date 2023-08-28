import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import AddAlarmBtn from "./AddAlarmBtn";
import AlarmInfoComponent from "./AlarmInfoComponent";
import "./styles/Alarm.css";
import "./styles/Animations.css";
import { alarmContext } from "./PageContent";

const Alarm = ({setAlarms,setStatusHandler}) => {
  let alarms=useContext(alarmContext);
  //!---------------------------------------------------STATES
  const [Hour, setHour] = useState(12);
  const [Minute, setMinute] = useState(0);
  const [Day, setDay] = useState("Sun");
  const [TimeZone, setTimeZone] = useState("AM");
  const [Status, setStatus] = useState("ON");
const [MainArray, setMainArray] = useState(alarms);

  //!---------------------------------------------------HANDLERS
  const SetStatusHandler=(s,i)=>
  {
    setStatusHandler(s,i);
    setStatus(s);
  }
  const plusclickHandler = () => {
    document.getElementById("AddAlarm").classList.add("d-none");
    document.getElementById("form").classList.remove("d-none");
    document.getElementById("mainContent").classList.add("ADDBLUR")
  };
  const AddAlarmHandler = () => {
    document.getElementById("AddAlarm").classList.remove("d-none");
    document.getElementById("form").classList.add("d-none");
    const newAlarm ={
        hour:Hour,
        minute:Minute,
        timeZone:TimeZone,
        status:Status,
        day:Day,
        id:alarms.length
      }
      setAlarms(newAlarm)
      setMainArray(prevMainArray => [...prevMainArray, newAlarm]);
      document.getElementById("mainContent").classList.remove("ADDBLUR")
  };
  const crossHandler = () => {
    document.getElementById("AddAlarm").classList.remove("d-none");
    document.getElementById("form").classList.add("d-none");
    document.getElementById("mainContent").classList.remove("ADDBLUR")
  };
  const hourHandler = (h) => {
    h %= 13;
    if (h == 0 || h == null || h == undefined) h = 1;
    setHour(h);
  };
  const minHandler = (m) => {
    m %= 60;
    setMinute(m);
  };
  const dayHandler = (d) => {
    setDay(d);
  };
  const TimeZoneHandler = (t) => {
    setTimeZone(t);
  };
  const statusHandler=(status,index)=>
  {
    MainArray[index].status=status;
  }
  useEffect(()=>{
  },[MainArray,Status])
  //!---------------------------------------------------RETURN
  return (
    <div className="alarm fade-in">
      <div id="form" className="d-none">
        <Form
          AddAlarmHandler={AddAlarmHandler}
          crossHandler={crossHandler}
          hourHandler={hourHandler}
          minHandler={minHandler}
          dayHandler={dayHandler}
          TimeZoneHandler={TimeZoneHandler}
        ></Form>
      </div>
      <div className="row justify-content-center m-0 " id="mainContent">
      {MainArray.map((com,index) => (
         <AlarmInfoComponent object={com} statusHandler={statusHandler} key={index} identity={com.id} setStatusHandler={SetStatusHandler}></AlarmInfoComponent>
        ))}
      </div>
      <div id="AddAlarm">
        <AddAlarmBtn handler={plusclickHandler}></AddAlarmBtn>
      </div>
    </div>
  );
};

export default React.memo(Alarm);
