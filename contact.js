import React from 'react'
import './contact.css'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
const contact = () => {
  return (
    <div className='und'>
    <div className="tink">
        <p className='prime'>Contact</p>
        <h2>Get in touch with us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores nobis ad officia cumque incidunt vel labore velit amet nulla animi similique facere nemo reprehenderit voluptates, impedit officiis. Consectetur, distinctio!</p>
        <h4><FaEnvelope className='fa'/>Email<br/>Contact@logistics.com</h4>
        <h4><FaPhoneAlt className='fa'/>Call Us <br />(00) 112 365 489</h4>
        <h4><FaClock className='fa'/>Mon-Sat9.00-18.00 <br />Saturday closed</h4>
    </div>
    <div className="lab">
        <input type="text" placeholder='Your name'/>
       <input type="text" placeholder='Phone Number' />
       <input type="text" placeholder='Email' />
       <input type="text" placeholder='City'/><br />
       <input type="text" placeholder='Your Message' className='message'/><br />
       <button className='btn' type='submit'>Submit Message</button>
    </div>
    </div>
  )
}

export default contact