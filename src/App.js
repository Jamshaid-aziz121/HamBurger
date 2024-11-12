
import './App.css';
import { useState } from 'react';
import HorizontalMenu from './HorizontalMenu';
import StudentsData from './components/StudentsData';
import { StudentTile } from './components/StudentTile';

function App() {



  const [isOpen, setIsOpen] = useState(false); // Manages main menu
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Manages sub-menu

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null); // Close if already open
    } else {
      setActiveSubMenu(index); // Open new sub-menu
    }
  }

  return (
    <div className="App">
      <HorizontalMenu />
      <StudentsData />
      {/* <StudentTile /> */}
      {/* <StudentTileView /> */}

      <nav className="hamburger-menu">
        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Main Menu */}
        <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
          <li className="menu-item">Home</li>

          {/* Menu item with sub-menu */}
          <li className="menu-item" onClick={() => toggleSubMenu(1)}>
            Services
            <ul className={`sub-menu ${activeSubMenu === 1 ? 'open' : ''}`}>
              <li className="sub-menu-item">Web Development</li>
              <li className="sub-menu-item">App Development</li>
            </ul>
          </li>

          {/* Another menu item with sub-menu */}
          <li className="menu-item" onClick={() => toggleSubMenu(2)}>
            Products
            <ul className={`sub-menu ${activeSubMenu === 2 ? 'open' : ''}`}>
              <li className="sub-menu-item">Laptops</li>
              <li className="sub-menu-item">Mobiles</li>
            </ul>
          </li>

          <li className="menu-item">Contact</li>
        </ul>
      </nav>


    </div>
  );
}

export default App;
