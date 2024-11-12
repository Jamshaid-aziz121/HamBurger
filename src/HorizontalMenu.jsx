import React, { useState } from 'react'
import hamburger from './img/iconHam.jpg'

export default function HorizontalMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <>
            <nav className="horizontal-menu">

                <img src={hamburger} className='imag' />
                <div className="logo">MyBrand</div>


                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>


                <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                    {/* <li></li> */}
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Services</li>
                    <li className="menu-item">Contact</li>
                </ul>
            </nav>

        </>
    )
}
