// Login.js

import React, { useState } from 'react';
import '../stylesheet/Login.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Perform user login logic here (e.g., send data to the server).
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
{/* Add a Link to the Registration Page*/}
<div className="register-link">
  <span>Don't have an account?</span>
  <Link to="/register">Register</Link>
</div>
      </div>
    </div>
  );
};

export default Login;
