import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };

  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='nav-wrapper'>
        <div className='nav-content'>
        <h1 className='logo'><a href='#' style={{textDecoration: 'none', color: '#fff'}}> yoKi. </a></h1>
            <ul>
                <li>
                    <a className='menu-item' href='#'>Home</a>
                </li>
                
                <li>
                    <a className='menu-item' href='#skills-container'>Skills</a>
                </li>
                
                <li>
                    <a className='menu-item' href='#experience-container'>Work Experience</a>
                </li>

                <li>
                    <a className='menu-item' href='#contact-container'>Contact me</a>
                </li>

                <button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button>
            </ul>
        <button className='menu-btn' onClick={toggleMenu}>
            <span className={'material-symbols-outlined'} style={{fontSize: '1.8rem'}}>
                {openMenu ? "X" : <GiHamburgerMenu />}
            </span>
        </button>
        
        </div>
    </nav>
    </>
  )
}

export default Navbar;