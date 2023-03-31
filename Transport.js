import React from 'react'
import './Transport.css'
const Transport = () => {
  return (
    <div className='transport'>
        <h3>Transportation Across The World</h3>
   <div className="trans"> 
    <div className="star">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT299naajivM6Kik1Ji0jMKOjN2jBdpLhLyFg&usqp=CAU" alt="" />
    </div>
    <div className="star">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSke5hnw5-nxcmsRBYvjyIFSHeFEhsoL3_4FQ&usqp=CAU" alt="" />
    </div>
    <div className="star">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-eC2FVX6AxPrVvCgBlCFKYay1ftYjUC9DA&usqp=CAU" alt="" />
    </div>
    <div className="star">
        <img  className='pic' src="https://wigmoretrading.com/wp-content/uploads/2021/12/industrial-warehouse-image-for-web-1.jpg" alt="" />
    </div>
    <div className="star">
        <img src="https://www.universalcargo.com/wp-content/uploads/container-ship-emissions.jpg" alt="" />
    </div>
   </div>
   <div className="big">
    <button className='tr'>More Work</button>
   </div>
    </div>
  )
}

export default Transport