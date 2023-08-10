import React from 'react'
import dp from '../DP.jpeg'
import { Link } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Home() {
  return (
    <div className='home'>
    <div className='home-center'>
        <div className='home-center-left'>
            <div className='photo'>
                <img className='dp' src={dp} alt="" />
            </div>
            <div className='photo-name'>Mahammad <br />Shahid</div>
            <div className='designation'>Data Analyst</div>
            <div className='social-media'>
            <Link className='contact-link' to={"https://wa.me/+919592333800"}><FaWhatsapp/></Link>
        <Link className='contact-link' to={"https://www.linkedin.com/in/mahammadshahid/"}><FaLinkedinIn/></Link>
        <Link className='contact-link' to={"mailTo:sheikhshahidpro@gmail.com"}><FaMailBulk /></Link>
            </div>
        </div>
        <div className='home-center-right'>
            <div className='hello'>Hello</div>
            <div className='discription'>Here's who I am & what I do</div>
            <div className='buttons'>
                <Link onClick={() => window.scrollTo(0, 0)} to={"/resume"}><button className='but1'>Resume</button></Link>
                <Link onClick={() => window.scrollTo(0, 0)} to={"/projects"}><button className='but2'>Projects</button></Link>
            </div>
            <div className='about-me'>Growing data analyst, I bring a strong analytical mindset, proficiency in statistical analysis, and a passion for
working with data. With solid skills in SQL, Power BI , Tableau, Python, and Excel, I am eager to contribute to
data-driven decision-making and collaborate effectively to extract valuable insights.</div>
        </div>
    </div>
    <div className='home-left'></div>
    <div className='home-right'></div>
    </div>
  )
}

export default Home