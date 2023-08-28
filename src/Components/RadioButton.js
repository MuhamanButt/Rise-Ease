import React from 'react'
import "./styles/RadioButton.css";

const RadioButton = ({description,onclick}) => {
  return (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" value={description} onClick={()=>onclick(description)}/>
      <label className="form-check-label" htmlFor="inlineRadio1">{description}</label>
    </div>
  )
}

export default RadioButton
