import React from 'react'
import "./Footer.css"
import ZuriImg from "../assets/zuri.svg"
import IngressiveImg from "../assets/ingressive.svg"

const Footer = () => {
  return (
    <div>
              <div className="footer-two-container">
        <div className="second-footer">
        <div className="sub-footer">
        <img src={ZuriImg} alt="" />
        <p id='footer-text'>HNG Internship 9 Front end Task</p>
        <img src={IngressiveImg} alt="" />

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Footer
