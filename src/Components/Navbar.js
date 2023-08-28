// Navbar.js
import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import alarmImage from './images/alarm.png';
import clockImage from './images/clocki.png';
import stopwatchImage from './images/stopwatch.png';
import timerImage from './images/timer.png';
import "./styles/navbar.css"

const Navbar = ({page,activatePage}) => {
  return (
    <div className='row navbar '>
      <NavbarButton title="Alarm" imgUrl={alarmImage} isActive={page==="Alarm"} onClick={()=>activatePage("Alarm")} />
      <NavbarButton title="Clock" imgUrl={clockImage} isActive={page==="Clock"} onClick={()=>activatePage("Clock")} />
      <NavbarButton title="StopWatch" imgUrl={stopwatchImage} isActive={page==="StopWatch"} onClick={()=>activatePage("StopWatch")} />
      <NavbarButton title="Timer" imgUrl={timerImage} isActive={page==="Timer"} onClick={()=>activatePage("Timer")} />
    </div>
  )
}

export default Navbar;
