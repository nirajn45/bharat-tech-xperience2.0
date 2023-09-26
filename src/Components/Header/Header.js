import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from "../../Assets/logo.png"
import "../../App.css"

const navLinks = [
  {
    path: '/', // Replace with the actual path to your Home section
    display: 'Home'
  },
  {
    path: '#about', // Replace with the actual path to your About section
    display: 'About'
  },
  {
    path: '#timeline', // Replace with the actual path to your Timeline section
    display: 'Timeline'
  },
  {
    path: '#prizes', // Replace with the actual path to your Prizes section
    display: 'Prizes'
  },
  {
    path: '#sponser', // Replace with the actual path to your Sponsors section
    display: 'Sponsors'
  },
  {
    path: '#contact', // Replace with the actual path to your Contact Us section
    display: 'Contact us'
  }
]



const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);


  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // headerRef.current.classList.add('sticky_header')
      } else if(document.body.scrollTop = 0 || document.documentElement.scrollTop <= 0){
        // headerRef.current.remove('sticky_header')
      }
    })
  }
  const scrollToSection = (path) => {
    const targetSection = document.querySelector(path);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
      toggleMenu(); // Close the menu when a link is clicked
    }
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');


  return (
    <>
      {/* <h1 className="sticky_header">hey</h1> */}

      <header className='header flex items-center justify-center -mt-8 md:px-12 pr-3 md:pr-0' ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img style={{height:"200px"}} src={logo} alt='Logo' />
              {/* <h1 className='text-white text-[20px]'>Logo</h1> */}
            </div>

            <div className="navigation  pb-2 px-7" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex text-white  items-center gap-[2.7rem]">
                {
                  navLinks.map((link, index) =>
                    <li   onClick={() => scrollToSection(link.path)}  key={index}> <NavLink to={link.path} className={navClass => navClass.isActive ?
                      'text-primaryColor text-[16px] leading-7 font-[600]' :
                      'text-textColor text-[16px] leading-7 font-[600]'} >
                      {link.display} </NavLink></li>
                  )
                }
              </ul >
            </div>

            <div className="flex items-center gap-4">
             
              <Link to='/register'>
                <button className='bg-gray-500  py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] '>Register</button>
              </Link>
              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className='w-6 h-6 text-white cursor-pointer' />

              </span>
            </div>
          </div>
        </div>
      </header>
    </>



  );
};

export default Header