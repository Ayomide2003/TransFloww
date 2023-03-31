import React from 'react'
import './Header.css'
import {FaClock} from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='header'>
    <div className="navbar">
         <h3>TransitFlow</h3> 
            <div className="head">
            <p className='p-tag'><FaClock className='fa'/>Mon-Sat 9.00-18.00
            <br/>Sunday Closed</p>  
            </div>
            <div className="option">
            <p className='p-tag'><FaEnvelope className='fa'/>Email
            <br/>Contact@Logistics.com</p>
            </div>
            <div className="option">
            <p className='p-tag'><FaPhoneAlt className='fa'/>Call Us 
            <br/>(00) 112 365 489</p>  
            </div>
            </div>
            </div>
     
   
  )
}

export default Header

