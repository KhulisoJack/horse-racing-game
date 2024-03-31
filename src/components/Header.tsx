import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import your Header CSS file

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <h1 className="logo">Virtual Horse Racing Game</h1>
            <nav className="nav-links">
                <ul>
                    <li><button className="nav-button"><Link to="/">Log In</Link></button></li>
                    <li><button className="nav-button"><Link to="/Register">Register</Link></button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
