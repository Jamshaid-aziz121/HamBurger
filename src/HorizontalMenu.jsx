import React, { useState } from 'react'

export default function HorizontalMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu on mobile

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <>
            <nav className="horizontal-menu">
                {/* Logo or Brand Name */}
                <div className="logo">MyBrand</div>

                {/* Hamburger Icon for Mobile */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                {/* Menu Items */}
                <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Services</li>
                    <li className="menu-item">Contact</li>
                </ul>
            </nav>

        </>
    )
}
