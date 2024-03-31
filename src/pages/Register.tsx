import React from 'react';
import '../styles/Register.css'; 
import Header from '../components/Header';


const Register: React.FC = () => {
  return (
    <div>
      <Header />
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
      <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
      <div>
          <label htmlFor="username">Fisrtname:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="username">Surname:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="username">Phone Number:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="username">ID Number:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    
  );
};

export default Register;
