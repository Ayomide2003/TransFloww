import React from 'react'
import './SemiBody.css'
import { FaShip } from 'react-icons/fa'
const SemiBody = () => {
  return (
    <div className='semi-body'>
    <div className="all">
    <p className='wat'>What We Do</p>
    <h1>Safe&Reliable<br/>Cargo Solutions</h1>
    </div>

        <div className="bodyall">
       <h3>Sea Transport Services</h3>
        <p>Following the quality of our service<br/>thus having gained trust of our<br/>many clients </p>
        <h3>Air Fright Services</h3>
        <p>Following the quality of our services <br/>thus having gained trust of our <br/>many clients</p>
       
        </div>
        <div className="allbody">
            <h3>Warehousing Services</h3>
            <p>Following the quality of our services <br/> thus having gained trust of our <br/> many clients</p>
            <h3>Local Shipping Services</h3>
            <p>Following the qualityof our services<br/> thus having gained trust of our <br/> many clients</p>

            
        </div>
    </div>


  )
}

export default SemiBody