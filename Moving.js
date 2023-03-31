import React from 'react'
import './Moving.css'
import { FaBox } from 'react-icons/fa'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaShip } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa'
import { FaCoins } from 'react-icons/fa'
import{FaPlaneDeparture} from 'react-icons/fa'
const Moving = () => {
  return (
    <div className='moving'>
    <div className="row">
      <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSymLjLXptu6PbYZ5bRcoFeuzXZh3ppw1lA&usqp=CAU" alt="" 
      />
    </div>
    <div className="cour">
        <h4>Why Choose</h4>
        <h1>We create opportunity br to reach potential</h1>
        <p>Leverage agile frameworks to provide a robust synopsis for <br /> strategy foster collaborative thinking to further the overall value <br /> proposition</p>
        <div className="het">
        <div className="safe">
        <h3><FaBox className='get'/>Safe Journey</h3>
        <h3><FaGlobeAmericas className='get'/>Global Tracking</h3>
        <h3><FaClock className='get'/>in Time Delivery</h3>
        </div>
        <div className="dej">
        <h3><FaShip className='get'/>Ship Everywhere</h3>
        <h3><FaHeadset className='get'/>24/7</h3>
        <h3><FaCoins className='get'/>Transparent pricing</h3>
        </div>  
    </div>
     </div>
    </div>
  )
}

export default Moving