import React from 'react'
import './News.css'
import {FaCalendarAlt} from 'react-icons/fa'
const News = () => {
  return (
    <div className='news'>
      <p>Our Blog</p>
      <h2>Our Latest News</h2>
         <div className="blog">
     <div className="new">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlRK4lH0BcxsnzyPPzWK26-URE3lMvQT1dwEzx2VgQK1My6uOO3_0a1grnMY2LpdBens&usqp=CAU" alt="" />
      <FaCalendarAlt className='alt'/>
        <div className="news-div">
      <h4>feight a worthy <br /> solution for your buiseness</h4> 
      <p>We are dedicted in creating added value <br /> for our customers by implememeting modern <br /> technology in our work.</p>
      <ul>
        <li>Urgent transport solutions</li>
        <li>Reliable & experienced staffs</li>
        <li>Urgent transport transport solutions</li>
        <li>Reliable $ experienced staffs</li>
      </ul>
      </div>
     </div>

     <div className="new">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vYT0AYOJR3LT0XfzR3tyVZsGgy_8ZBrLZQ&usqp=CAU" alt="" />
      <FaCalendarAlt className='alt'/>
          <div className="news-div">
      <h4>Five things you should have ready for your broker <br /></h4> 
      <p>We are dedicted in creating added value <br /> for our customers by implememeting modern <br /> technology in our work.</p>
      <ul>
        <li>Urgent transport solutions</li>
        <li>Reliable & experienced staffs</li>
        <li>Urgent transport transport solutions</li>
        <li>Reliable $ experienced staffs</li>
      </ul>
     </div>

     </div>
     <div className='new'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38OjaS25PbzV4-mZZZP33ghEU_cT1-o0mBA&usqp=CAU" alt="" />
    <FaCalendarAlt className='alt'/>
    <div className="news-div">
      <h4>How technology can help redraw the supply chain map<br /></h4> 
      <p>We are dedicted in creating added value <br /> for our customers by implememeting modern <br /> technology in our work.</p>
      <ul>
        <li>Urgent transport solutions</li>
        <li>Reliable & experienced staffs</li>
        <li>Urgent transport transport solutions</li>
        <li>Reliable & experienced staffs</li>
      </ul>
     </div>
     </div>
  </div>
    <button className='more-btn'>More Blog</button>
    </div>
  )
}

export default News