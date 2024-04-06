// UserInformation.tsx
import React from 'react';

interface UserInformationProps {
  username: string;
  wallet: number;
  status: string;
}

const UserInformation: React.FC<UserInformationProps> = ({ username, wallet, status }) => {
  return (
    <div>
      <h2>Welcome, {username}</h2>
      <p>Wallet Balance: {wallet}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default UserInformation;
