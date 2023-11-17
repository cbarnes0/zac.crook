import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex">
      <NavLink to='/' className='nav-link mr-2 font-bold'>
        Home
      </NavLink>
      <NavLink to='/music' className='nav-link mr-2 font-bold'>
        Music
      </NavLink>
      <NavLink to='/videos' className='nav-link mr-2 font-bold'>
        Videos
      </NavLink>
      <NavLink to='/live' className='nav-link mr-2 font-bold'>
        Live
      </NavLink>
      <a href='https://www.instagram.com/supercoolbadass.psd/' className='nav-link font-bold' target="_blank" rel="noopener noreferrer">
        Merch
      </a>
    </nav>
  );
};


export default Navbar;