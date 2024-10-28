import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';

const Navbar = () => {
  const [activeLink, SetActiveLink] = useState("home");

  const handleSetActive=(linkto:any)=>{
    SetActiveLink(linkto);
  }
  return (
    <div className='main_nav'>
      <div className="navbar_components flex">
        <Link to="home" smooth = {true} spy={true} offset={-300} duration= {1000} className={`item ${activeLink === 'home' ? 'active' : ''}`} onSetActive={() => handleSetActive('home')}>Home</Link>
        <Link to="about" smooth = {true} spy={true} offset={-200} duration= {1000}  className={`item ${activeLink === 'about' ? 'active' : ''}`} onSetActive={() => handleSetActive('about')}>About</Link>
        <Link to="experiences" smooth = {true} spy={true} offset={-200} duration= {1000}  className={`item ${activeLink === 'experiences' ? 'active' : ''}`} onSetActive={() => handleSetActive('experiences')}>My Experiences</Link>
        <Link to="projects" smooth = {true} spy={true} offset={-200} duration= {1000}  className={`item ${activeLink === 'projects' ? 'active' : ''}`} onSetActive={() => handleSetActive('projects')}>Projects</Link>
        <Link to="contact" smooth = {true} spy={true} offset={-200} duration= {1000}  className={`item ${activeLink === 'contact' ? 'active' : ''}`} onSetActive={() => handleSetActive('contact')}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
