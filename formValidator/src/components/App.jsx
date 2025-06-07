import React from 'react';

export default function App() {
  return (
    <div className="container">
      <form className="form">
        <h2 className="title">Register with us</h2>
        <label>Username</label>
        <input type="text" placeholder="Username" />

        <label htmlFor="">Email</label>
        <input type="email" placeholder="email" />

        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" />

        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder="password" />

        <button>Submit</button>
      </form>
    </div>
  );
}
