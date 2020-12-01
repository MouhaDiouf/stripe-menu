import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.svg';
import { useGlobalContext } from './context';

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
          <ul className="nav-links"></ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
