// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'


// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className="logo">
//             <span className='logoicon'>P</span>
//             <span className='namelogo'>Pooja Mukati</span>
//         </div>
//         <div className="menubar">
//             <ul className='menu'>
//                 <li className='menu-item'><Link to='/my-portfolio/'>HOME🏠</Link></li>
//                 <li className='menu-item'><Link to='/my-portfolio/about'>ABOUT💁‍♀️</Link></li>
//                 <li className='menu-item'><Link to='/my-portfolio/projects'>PROJECTS💻</Link></li>
//                 <li className='menu-item'><Link to='/my-portfolio/contacts'>CONTACTS📞</Link></li>
//             </ul>
//         </div>
//     </div>

//   )
// }

// export default Navbar

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
                    <li className='menu-item' onClick={toggleMenu}><Link to='/my-portfolio/'>HOME🏠</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/my-portfolio/about'>ABOUT💁‍♀️</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/my-portfolio/projects'>PROJECTS💻</Link></li>
                    <li className='menu-item' onClick={toggleMenu}><Link to='/my-portfolio/contacts'>CONTACTS📞</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;