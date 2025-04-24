import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <h3>Mood tracker</h3>
      <EmojiRow />
      <div className="half-circle"></div>
    </div>
  );
}

function EmojiRow() {
  return (
    <div className="container">
      <div className="emoji-row">
        <SmillyEmoji mood="happy" title="happy" />
        <SmillyEmoji mood="good" title="good" />
        <SmillyEmoji mood="surprised" title="surprised" />
        <SmillyEmoji mood="sad" title="sad" />
        <SmillyEmoji mood="supersad" title="super sad" />
        <SmillyEmoji mood="angry" title="angry" />
      </div>
    </div>
  );
}

function SmillyEmoji({ mood, title }) {
  return (
    <div className={`emoji ${mood}`} title={title}>
      <div className="smiley">
        <div
          className={`eye left ${mood === 'supersad' ? 'supersad' : ''}`}
        ></div>
        <div
          className={`eye right ${mood === 'supersad' ? 'supersad' : ''}`}
        ></div>

        <div className={`mouth ${mood}`}></div>
      </div>
    </div>
  );
}
