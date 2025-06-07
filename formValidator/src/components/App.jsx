import React, { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) return;
    console.log(userName);
  }

  return (
    <div className="container">
      <form className="form">
        <h2 className="title">Register with us</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="password"
          value={conPassword}
          onChange={e => setConPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
