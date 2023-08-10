import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link className='name' onClick={() => window.scrollTo(0, 0)} to={"/"}>Mahammad Shahid</Link>
        <Link className='nav-about' onClick={() => window.scrollTo(0, 0)} to={"/"}>About Me</Link>
        <Link className='nav-resume' onClick={() => window.scrollTo(0, 0)} to={"/resume"}>Resume</Link>
        <Link className='nav-projects' onClick={() => window.scrollTo(0, 0)} to={"/projects"}>Projects</Link>
        <Link className='nav-contacts' onClick={() => window.scrollTo(0, 0)} to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar