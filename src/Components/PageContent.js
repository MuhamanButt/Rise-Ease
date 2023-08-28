import React, { useEffect } from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import Alarm from "./Alarm";
import StopWatch from "./StopWatch";
import { useState } from "react";

export const alarmContext=React.createContext();
export const timerContext = React.createContext();
export const stopwatchContext = React.createContext();

const PageContent = ({ page }) => {
  const [TimerData, setTimerData] = useState({
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });
  const [StopWatchData, setStopWatchData] = useState({
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    MilliSeconds: 0,
  });
  const [AlarmMainArray, setAlarmMainArray] = useState([]);

  const setStatusHandler=(status,index)=>
  {
    AlarmMainArray[index].status=status;
  }
const setAlarms=(obj)=>{
setAlarmMainArray(prv=>[...prv,obj])
}
  const TimerDataHandler = (obj) => {
    setTimerData(obj);
  };
  const StopWatchDataHandler = (obj) => {
    setStopWatchData(obj);
  };

  if (page == "Clock") {
    return <Clock />;
  } else if (page == "StopWatch") {
    return (
      <div>
        <stopwatchContext.Provider value={StopWatchData}>
          <StopWatch stopWatchDataHandler={StopWatchDataHandler} />
        </stopwatchContext.Provider>
      </div>
    );
  } else if (page == "Timer") {
    return (
      <div>
        <timerContext.Provider value={TimerData}>
          <Timer timerDataHandler={TimerDataHandler} />
        </timerContext.Provider>
      </div>
    );
  } else if (page == "Alarm") {
    return (
      <div >
       <alarmContext.Provider value={AlarmMainArray}>
          <Alarm  setAlarms={setAlarms} setStatusHandler={setStatusHandler}/>
          </alarmContext.Provider>
      </div>
    );
  }
};

export default PageContent;
