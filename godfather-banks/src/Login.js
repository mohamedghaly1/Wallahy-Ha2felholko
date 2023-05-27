import React, { useState } from 'react';
import './Login.css';
import logo from './nobg-logo.png';
import {Link} from 'react-router-dom';

function Login  ()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
        setErrorMessage('Please fill in the textboxes');
    }};

  return (
    <div className="login-page">
      <header className="login-header">
        <nav className="login-navigation">
          <div className="login-logo">
          <img src={logo} alt="Godfather Bank Logo" />
          <h1>Godfather Banks</h1>
          </div>
          <Link to ='/'><button className="home-button">Home</button></Link>
        </nav>
      </header>
      <main className="login-content">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errorMessage && !username ? 'error' : ''}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorMessage && !password ? 'error' : ''}
            />

            {errorMessage && (!username || !password) && (
              <p className="error-message">{errorMessage}</p>
            )}

            <button className="login-button" type="submit">
              Login
            </button>
              
              <li><a href="/register">No Account? Create Now</a></li>
              <li><a href="/forgot-password">Forgot Password?</a></li>
          </form>
        </div>
      </main>
      <footer className="login-footer">
        <p>&copy; 2023 Godfather Banks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;