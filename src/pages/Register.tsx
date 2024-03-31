import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';
import Header from '../components/Header';

const Register: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    surname: '',
    phoneNumber: '',
    idNumber: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Make POST request to backend registration endpoint
      const response = await axios.post('http://localhost:5000/api/newuser/register', formData);
      console.log('Registration successful:', response.data);
      // Reset form data after successful registration
      setFormData({
        username: '',
        firstName: '',
        surname: '',
        phoneNumber: '',
        idNumber: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="idNumber">ID Number:</label>
            <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
