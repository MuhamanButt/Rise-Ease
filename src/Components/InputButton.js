import React from "react";
import { useState } from "react";
const InputButton = ({ placeholder, type, handler, colSize }) => {
  const [inputData, setinputData] = useState();
  const changeHandler = (e) => {
    let value = e.target.value;
    setinputData(value);
    handler(value);
  };
  return (
    <div className={`col-${colSize} text-center`}>
      <input type={type} className="form-control w-100" placeholder={placeholder} onChange={changeHandler} style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.44))" }}
      />
    </div>
  );
};

export default InputButton;
