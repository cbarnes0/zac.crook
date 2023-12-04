import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex mt-5">
      <NavLink to='/' className='nav-link mr-2 font-bold text-blue-700 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]'>
        home
      </NavLink>
      <NavLink to='/music' className='nav-link mr-2 font-bold text-yellow-500 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]'>
        music
      </NavLink>
      <NavLink to='/videos' className='nav-link mr-2 font-bold text-green-700 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]'>
        videos
      </NavLink>
      <NavLink to='/live' className='nav-link mr-2 font-bold text-purple-700 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]'>
        live
      </NavLink>
      <a href='https://www.instagram.com/supercoolbadass.psd/' className='nav-link font-bold text-red-500 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]' target="_blank" rel="noopener noreferrer">
        supercoolbadass
      </a>
    </nav>
  );
};


export default Navbar;