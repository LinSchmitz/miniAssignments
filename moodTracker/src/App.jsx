import React from 'react';
import './index.css';

export default function App() {
  return (
    <div>
      Mood tracker
      <SmillyEmoji />
    </div>
  );
}

function SmillyEmoji() {
  return (
    <div className="container">
      <div className="emoji">
        <div className="smilly">
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="cheek left"></div>
          <div className="cheek right"></div>
          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
}
