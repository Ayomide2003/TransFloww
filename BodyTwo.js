import React from 'react'
import './BodyTwo.css'
import { FaBoxOpen } from 'react-icons/fa'
import{FaMoneyBill} from 'react-icons/fa'
import { FaSquareFull } from 'react-icons/fa'
const BodyTwo = () => {
  return (
    <div className='body-two'>
     <div className="nal">
        <p className='pri'>Why Us</p>
        <h2>We provide full range global
            <br/>logistics solutions</h2>
            <p>Leverage agile framework to provide a robust synopsis for strategy foster collaborative thinking to further the overrall value proposition.</p>

          <p>Organically grow the holistic world view of disruptive innovations via workplace diversity and empowerment</p>
          <h3><FaBoxOpen className='box'/>Delivery on Time</h3>
          <h3><FaMoneyBill className='mon'/>Optimised Travel Cost</h3>
     </div>
     <div className="pick">
     <div className="bos">
     <h2>1294<FaSquareFull  className='sq'/>Delivered Packages</h2>
      </div>
     <div className="bol">
      <h2>3594<FaSquareFull className='sq'/>Satisfied Clients</h2>
    </div>
    </div>
    </div>
  )
}

export default BodyTwo