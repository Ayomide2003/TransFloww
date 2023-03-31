import React from 'react'
import './Sidebar.css'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
const Sidebar = () => {
  return (
    
    <div className='sideBar'>
       <div className=" sidebarNav">
        <div className="dav">
        <ul>
            <li className='home'>Home</li>
            <li>About</li>
            <li>Pages <FaAngleDown/></li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
        </div>
        </div> 
        <div className="devIcons">
        <div className="Icons">
            <FaInstagram/>
            </div> 
        <div className="Icons">
            <FaFacebook/>
            </div> 
        <div className="Icons">
            <FaTwitter/>
            </div> 
        </div>
        <button>Request Quote</button>
    </div>
    
  )

}

export default Sidebar