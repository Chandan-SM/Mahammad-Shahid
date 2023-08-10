import React from 'react'
import { Link } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-heading'>Let's Talk</div>
      <div className='contact-container'>
        <Link className='contact-link' style={{color:"green"}} to={"https://wa.me/+919592333800"}><FaWhatsapp/></Link>
        <Link className='contact-link' style={{color:"blue"}} to={"https://www.linkedin.com/in/mahammadshahid/"}><FaLinkedinIn/></Link>
        <Link className='contact-link' style={{color:"red"}} to={"mailTo:sheikhshahidpro@gmail.com"}><FaMailBulk /></Link>
      </div>
    </div>
  )
}

export default Contact