import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Your App Logo</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;