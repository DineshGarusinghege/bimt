"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify-icons/mdi/menu';
import closeIcon from '@iconify-icons/mdi/close';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Image from 'next/image';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      {/* Menu Icon for Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={toggleMenu}>
          <Icon icon={isOpen ? closeIcon : menuIcon} className="text-3xl text-white" />
        </button> 
      </div>
       {isScrolled && ( 
         <header style={{ display: 'flex' }}>
          <div style={{ height: '60vh', marginTop: '210px', marginRight: '150px' }}
            className={`fixed top-5 right-5 bottom-5 w-[250px] bg-white/15 backdrop-blur-lg text-white p-6 flex flex-col justify-between rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isOpen || isScrolled ? 'translate-x-0' : 'translate-x-full'
              } md:translate-x-0 z-40`}>
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/images/logo 1.png"
                alt="Background Image"
                width={150}
                height={64}               
                quality={100}
                className="z-0"
              />
            </div> 

            {/* Menu Links */}
             <nav className="flex flex-col items-center space-y-4 text-gray-200">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Areas of Work</a>
              <a href="#" className="hover:underline">Our Services</a>
              <a href="#" className="hover:underline">Our Team</a>
              <a href="#" className="hover:underline">Blogs</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </nav> 

            {/* Client Portal Button */}
            <div className="relative"> 
              {/* Image  */}
              <img
            src="Images/Vector.png"
            className="absolute w-full h-auto object-cover"
            layout="fill"
            objectFit="cover"
            quality={100}

            style={{width:'52.6px'}}
          /> 

             <Image
                src="/images/Vector.png"
                alt="logo"
                width={52.6} 
                height={52.6}
                className="absolute object-cover"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-230%, -80%)',
                }}
              />
              


              <button
                className="top-2 left-2 px-4 py-2 rounded-full text-center"
                style={{
                  backgroundColor: '#272A5D', 
                  color: '#FFFFFF',           
                  border: '2px solid #272A5D',
                  borderRadius: '10px'
                }}
              >
                STUDENT PORTAL
              </button>

            </div>
          </div> 
          <div style={{ height: '12vh', marginTop: '775px', marginRight: '150px' }}
            className={`fixed top-5 right-5 bottom-5 w-[250px] bg-white/15 backdrop-blur-lg text-white p-6 flex flex-col justify-between rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isOpen || isScrolled ? 'translate-x-0' : 'translate-x-full'
              } md:translate-x-0 z-40`}>
            <div>
              <p className="text-white text-lg mb-4">Follow Us On</p>
              <div className="flex space-x-4">
                <div className="p-2 border border-gray-300 rounded-full text-white hover:bg-gray-700 cursor-pointer">
                  <FaFacebookF />
                </div>

                <div className="p-2 border border-gray-300 rounded-full text-white hover:bg-gray-700 cursor-pointer">
                  <FiX />
                </div>

                <div className="p-2 border border-gray-300 rounded-full text-white hover:bg-gray-700 cursor-pointer">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div> 
         </header>
      )} 



      {/* Overlay for Mobile */}
       {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )} 
    </>
  );
};

export default Header;
