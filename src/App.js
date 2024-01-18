import React, { useState } from 'react';

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
    <div className="App">
      <header className="App-header">
        <h1>Streamline billing, simplify life</h1>
        <form onSubmit={handleFormSubmit}>
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
        <button>LOGIN</button>
      </header>
    </div>
  );
}

export default App;
