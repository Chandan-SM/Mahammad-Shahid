import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link className='name' to={"/"}>Mahammad Shahid</Link>
        <Link className='nav-about' to={"/"}>About Me</Link>
        <Link className='nav-resume' to={"/resume"}>Resume</Link>
        <Link className='nav-projects' to={"/projects"}>Projects</Link>
        <Link className='nav-contacts' to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar