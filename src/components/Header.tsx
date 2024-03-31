// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1 className="logo">Virtual Horse Racing Game</h1>
      <nav className="nav-links">
        <ul>
        <li>
            <button className="nav-button">
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button className="nav-button">
              <Link to="/login">Log In</Link>
            </button>
          </li>
          <li>
            <button className="nav-button">
              <Link to="/register">Register</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
