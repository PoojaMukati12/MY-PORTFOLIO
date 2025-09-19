import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className="logo">
                <span className='logoicon'>P</span>
                <span className='namelogo'>Pooja Mukati</span>
            </div>

            {/* Hamburger icon for mobile */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Menu links */}
            <div className={`menubar ${isOpen ? 'open' : ''}`}>
                <ul className='menu'>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/'>HOME🏠</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/about'>ABOUT💁‍♀️</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/projects'>PROJECTS💻</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/contacts'>CONTACTS📞</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;