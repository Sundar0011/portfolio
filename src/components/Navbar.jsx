import React, { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { SiKalilinux } from "react-icons/si";
import Navbutton from './Navbutton';
import { Link } from "react-scroll";

const Navbar = () => {
  
const [isOpen,setIsOpen]=useState(false);

const [showDropdown,setShowDropdown]=useState(false);

const toggleDropdown=()=>{
  setIsOpen(!isOpen);
}

  return (
    <div className=''>
    <div className=' flex justify-between '>
    
      <div data-aos='fade-down'>
        <SiKalilinux className=' text-green-400 text-[45px] mb-2 inline' />
        <li className='inline animate-slideTB text-white font-rubikdirt text-[24px] list-none'> Sundaravel</li>
      </div>
      <div>
      <ul className='hidden md:flex animate-slideTB' >
      <Link
          to="Home"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton  name='Home'/>
      </Link>

      <Link
          to="Skills"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Skills'/>
      </Link>

      <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Projects'/>
      </Link>

      <Link
          to="Resume"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Resume'/>
      </Link>

      <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Contact'/>
      </Link>
        </ul>
        <div className='md:hidden'>
        <RxDropdownMenu className='w-10 h-10 text-white' onClick={toggleDropdown}/>
      </div>
      
      </div>

      
    </div>
    {isOpen&&(
        <div className='absolute pl-[70%] z-10 bg-transparent mr-5'>
          <ul className='md:hidden p-1 border  text-center'>
            
          <Link
          to="Home"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Home'/>
      </Link>
      <Link
          to="Skills"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Skills'/>
      </Link>
      <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Projects'/>
      </Link>
      <Link
          to="Resume"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Resume'/>
      </Link>

      <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
        <Navbutton name='Contact'/>
      </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
