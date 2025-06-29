import React, { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = email =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  function handleSubmit(e) {
    e.preventDefault();

    userName.length < 3
      ? console.log('Please enter at least 3 letters.')
      : console.log('userName is valid!');

    if (!isValidEmail(email)) {
      setError('❌ Please enter a valid email address.');
    } else {
      setError('');
      console.log('✅ Email is valid!');
    }
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
          style={{
            border: submitted
              ? userName.trim()
                ? '1px solid #659287'
                : '1px solid #c94545'
              : '1px solid #a3a3a3',
          }}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            border: submitted
              ? email.trim()
                ? '1px solid #659287'
                : '1px solid #c94545'
              : '1px solid #a3a3a3',
          }}
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
