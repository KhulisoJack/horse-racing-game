import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import Header from '../components/Header';


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Replace this with your authentication logic
    if (username === 'example' && password === 'password') {
      // Authentication successful, redirect or perform other actions
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>

    </div>
    
  );
};

export default LoginPage;
