import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css'; 

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h2 className="welcome-text">Welcome to the Ultimate Horse Racing Game!</h2>
        <p className="description">Experience the thrill of virtual horse racing!</p>
        <Link to="/race" className="start-button">Start Racing</Link>
        <div className="image-container">
        <img src="/images/Horse-Races-hero.png" alt="Horse Racing" className="home-image" />

        </div>
      </div>
    </div>
  );
};

export default Home;
