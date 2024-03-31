import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import your Header CSS file

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <h1 className="logo">Virtual Horse Racing Game</h1>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/race" className="nav-link">Race</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
