import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';  // Correct path to the Header CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
