import React from 'react'
import './Footer.css'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa' 
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-end">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1T7CuhJt8OuQCsu1wdfAoDV0lYO5Vw8St7HwZ2vMrpCB2KZ_4nbezCJMdvN_J7uKsg0c&usqp=CAU" alt="" className='footer-img' />
    </div>
        <div className="end-nav">
            <h1>Transit</h1>
            <ul>
                <li>Pages</li>
                <li>Utility</li>
                <li>Subscribe</li>
            </ul>
        </div>
        
    <div className="end">
        <div className="final-part">
            <h4>Leverage agile framework to provide a <br /> rebust synopsis for strategy collaborative <br /> thinking to further the overall value <br /> proposition</h4>
             <p><FaEnvelope className='fa'/>Email
            <br/>Contact@Logistics.com</p>
            <p><FaPhoneAlt className='fa'/>Call Us 
            <br/>(00) 112 365 489</p>  
        </div>
        <div className="foot">
        <div className="ending">
            <h4>About Us</h4>
            <h4>Our Team</h4>
            <h4>Our Projects</h4>
            <h4>Pricing</h4>
            <h4>Contact</h4>
        </div>
        <div className="ends">
            <h4>Style Guide</h4>
            <h4>Changelog</h4>
            <h4>Licences</h4>
            <h4>Protected</h4>
            <h4>Not found</h4>
        </div>
        <div className='tags'>
        <input type="text" placeholder='Email here:'/> <br />
        <button className='end-btn'>Send Now</button>
      
        <FaLinkedin/>
            <FaTwitter/>
            <FaFacebook/>
            </div>
            
    </div>
    </div>
    </div>
  )
}
export default Footer