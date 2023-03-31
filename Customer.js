import React from 'react'
import './Customer.css'
import {FaUserCircle} from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight}from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
const Customer = () => {
  return (
    <div className='customer'>
        <p className='do'>Testimonial</p>
        <h1 className='mv'>What Our Customer Say</h1>
        <div className="free">
        <FaArrowLeft className='left'/><FaArrowRight className='right'/>
        </div>
        <div className="dred">
    <div className="fel">
      <h3><FaUserCircle/>Kathleen Smith
      <br/>Fuel Company <FaQuoteLeft/></h3>  
      <p>Leverage agile frameworks to provide a robust synopsois for <br/> strategy foster collaborativve thinking to further the overarall<br/> value proposition.Organically grow the holistic world view <br/>of disruptive innovation via workkplace diversity and<br/>empowerment.</p>
      <FaStar className='str'/><FaStar className='str'/><FaStar className='str'/><FaStar className='str'/><FaStar className='str'/>
    </div>
    <div className="mar">
        <h3><FaUserCircle/>John Martin <FaQuoteLeft/>
      <br/>Restoration Company</h3>  
      <p>Leverage agile framework to provide a robust synposis for<br/>statregy foster collaborative thinking to further the overall<br/>value proposition.Organically grow the hostolic world view<br/>of disruptive innovation via workplace diversity and <br /> empowerment</p>
      <FaStar className='str'/><FaStar className='str'/><FaStar className='str'/><FaStar className='str'/><FaStar className='str'/>
    </div>
    </div>
     </div>
  )
}

export default Customer