import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInformation from './UserInformation';
import GameDetails from './GameDetails';
import RaceHistory from './RaceHistory';
import Header from '../components/Header';
import RacePage from './RacePage';


const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [gameData, setGameData] = useState<any>(null);
  const [raceHistory, setRaceHistory] = useState<any[]>([]);

  // Fetch user data and game details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchGameData = async () => {
      try {
        const response = await axios.get('/api/game');
        setGameData(response.data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchUserData();
    fetchGameData();
  }, []);

  // Fetch race history
  useEffect(() => {
    const fetchRaceHistory = async () => {
      try {
        const response = await axios.get('/api/history');
        setRaceHistory(response.data);
      } catch (error) {
        console.error('Error fetching race history:', error);
      }
    };

    fetchRaceHistory();
  }, []);

  return (
    <div>
      <Header />

      {/* Display user information */}
      {userData && <UserInformation username={userData.username} wallet={userData.wallet} status={userData.status} />}

      {/* Display game details */}
      {gameData && <GameDetails /* pass necessary props */ />}

      {/* Display race history */}
      <RaceHistory /* pass necessary props */ />
      <RacePage />
    </div>
  );
};

export default Dashboard;
