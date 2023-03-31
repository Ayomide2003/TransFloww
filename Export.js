import React from 'react'
import './Export.css'
import { FaLinkedin } from 'react-icons/fa';
import{FaTwitter} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
const Export = () => {
  return (
    <div className='export'>
    <div className="reel">
        <p>The Transporters</p>
        <h2>Meet Expert Team</h2>
        </div>
        <div className="exp">
       <div className="expert">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU" alt="" />
        <button className='ja'>Jessica Arrow</button>
        <button className='src-two'>
        <FaTwitter/>
            <FaFacebook/>
            <FaInstagram/>
        </button>
       </div>
       <div className="expert">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp_ByMCZW8m0s3KmAbIENDvR2Zc_HkBJyYw&usqp=CAU" alt="" />
        <button className='fr'>Kathleem Smith</button>
        <button className='src-one'>
            <FaLinkedin/>
            <FaTwitter/>
            <FaFacebook/>
            <FaInstagram/>
        </button>
       </div>
       <div className="expert">
        <img className='ing' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU" alt="" />
        <button className='vr'>Rebecca Tyler<br/> Designer</button>
        <button className='src-three'>
              <FaFacebook/>
            <FaInstagram/>
        </button>
       </div>
    </div>
    
    </div>
  )
}

export default Export