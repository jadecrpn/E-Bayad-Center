// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add registration or login logic here
  };

  return (
    <div>
      {/* First Page Section */}
      <header className="first-page">
        <h1>Streamline billing, simplify life</h1>
        <div className="login-button">
          <button>LOGIN</button>
        </div>
      </header>

      {/* Registration Form Section */}
      <div className="registration-page">
        <form className="registration-form" onSubmit={handleFormSubmit}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
}

export default App;
