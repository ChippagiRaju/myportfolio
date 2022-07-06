import React from 'react'
import "./Headers.css"


export default function Headers({refid,name}) {
  return (
    <div id={refid} >
      <h1 style={{ fontWeight: "bold" }} className="gr">{name}</h1>
     
    </div>
  )
}



