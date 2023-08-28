import React from 'react'
import "./styles/title.css"
import "./styles/Animations.css";

const Title = (props) => {
  return (
    <div className='Heading row m-0'>
      <div className="col-6">
      <p> {props.name}</p>
      </div>
     <div className="col-6 text-end p-0">
     <p > {props.icon} </p>
     </div>
    </div>
  )
}

export default Title
