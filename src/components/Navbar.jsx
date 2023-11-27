import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex mt-5">
      <NavLink to='/' className='nav-link mr-2 font-bold text-blue-700'>
        home
      </NavLink>
      <NavLink to='/music' className='nav-link mr-2 font-bold text-yellow-500'>
        music
      </NavLink>
      <NavLink to='/videos' className='nav-link mr-2 font-bold text-green-700'>
        videos
      </NavLink>
      <NavLink to='/live' className='nav-link mr-2 font-bold text-purple-700'>
        live
      </NavLink>
      <a href='https://www.instagram.com/supercoolbadass.psd/' className='nav-link font-bold text-red-500' target="_blank" rel="noopener noreferrer">
        merch
      </a>
    </nav>
  );
};


export default Navbar;