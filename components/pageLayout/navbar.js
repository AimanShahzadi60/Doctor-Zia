"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // For routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close icon
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className='contact_detail'>
      <a href="tel: 004740849614"> <img src={"/images/call.png"} alt='Call us' width={20} height={20} className='imggg'/>  </a>
        <p>
        <a href="tel: 004740849614">
          Call Us: +91 80920 29002
          </a>
        </p>
        <a  href="mailto: dr.zia@alrushed.com">    <img src={"/images/email.png"} alt='Call us' width={25} height={25} className='imggg'/>  </a>
        <p>
          <a  href="mailto: dr.zia@alrushed.com">
       Send Us Email: dr.zia@alrushed.com
        </a>
        </p>
      </div>
      <div className="container">
        <div className='logo-container'>
        <Link href="/" legacyBehavior>
          <a className="logo"><img src={'/images/logo.png'} alt='zia foundation' width={200} height={80}/></a>
        </Link>
        </div>

        <div className='ulCont'>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className='list-items'>
            <Link href="/" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Home</a>
            </Link>
          </li>
          <li  className='list-items'>
            <Link href="/#about-us" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>About Us</a>
            </Link>
          </li>
          <li  className='list-items'>
            <Link href="/#services" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Services</a>
            </Link>
          </li>
          <li  className='list-items'>
            <Link href="/#blogs" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Blogs</a>
            </Link>
          </li>


          <li  className='list-items'>
            <Link href="/#contact-us" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Contact Us</a>
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <button className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? (
     <FontAwesomeIcon icon={faTimes} /> // Close icon
          ) : (
            
            <FontAwesomeIcon icon={faBars} />
          
          )}
        </button>
        </div>

        <div className='donation-btn'>
        <a href="/#contact-us">
          <button className='secondarybtn'>Stay with Us</button>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

