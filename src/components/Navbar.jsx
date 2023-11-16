import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className='nav-link'>
                Home
            </NavLink>
            <NavLink to='/music' className='nav-link'>
                Music
            </NavLink>
            <NavLink to='/videos' className='nav-link'>
                Videos
            </NavLink>
            <NavLink to='/live' className='nav-link'>
                Live
            </NavLink>
            <NavLink to='https://www.instagram.com/supercoolbadass.psd/' className='nav-link'>
                Merch
            </NavLink>
        </nav>
    );
};

export default Navbar;