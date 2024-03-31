import React from 'react';
import Header from '../components/Header';


const RacePage: React.FC = () => {
  const handleRaceStart = () => {
    // Implement logic to start the race
  };

  return (
    <div>
      <Header />

      <h2>Race Page</h2>
      <button onClick={handleRaceStart}>Start Race</button>
    </div>
  );
};

export default RacePage;
