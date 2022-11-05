import React, { useState } from 'react'
import "./LinkButton.css"

const LinkButton = (props) => {
  return (
    <div className = "button-container">
        <div className="a-button">
          <a href={props.link} id= {props.id} target="_blank" className='buttons'>{ props.field }</a>
        </div>
        
      
    </div>
  )
}

export default LinkButton
