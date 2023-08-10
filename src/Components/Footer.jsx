import React from 'react'
import { Link } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-text'>
© 2023 by Mahammad Shahid</div>
      <div className='call'>
        <div className='call1'>Call</div>
        <div className='call2'> +91 95923 33800 </div>
      </div>
      <div className='write'>
        <div className='write1'>Write</div>
        <div className='write2'> sheikhshahidpro@gmail.com</div>
      </div>
      <div className='follow'>
        <div className='follow1'>Follow</div>
        <div className='follow2'>
        <Link className='contact-link' to={"https://wa.me/+919592333800"}><FaWhatsapp/></Link>
        <Link className='contact-link' to={"https://www.linkedin.com/in/mahammadshahid/"}><FaLinkedinIn/></Link>
        <Link className='contact-link' to={"mailTo:sheikhshahidpro@gmail.com"}><FaMailBulk /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer