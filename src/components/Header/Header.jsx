import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Gordon Ramsay Recipes</Link>
      <nav className="nav">
        <ul>
          <li><NavLink to="/recipes" className={({isActive}) => isActive ? 'active' : ''}>Recipes</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;