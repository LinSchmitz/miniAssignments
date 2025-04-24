import React from 'react';
import './index.css';

export default function App() {
  return (
    <div>
      Mood tracker
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
        <SmillyEmoji mood="sad" title="sad" />
        <SmillyEmoji mood="surprised" title="surprised" />
        <SmillyEmoji mood="angry" title="angry" />
        <SmillyEmoji mood="winking" title="winking" />
      </div>
    </div>
  );
}

function SmillyEmoji({ mood, title }) {
  return (
    <div className={`emoji ${mood}`} title={title}>
      <div className="smiley">
        <div
          className={`eye left ${mood === 'winking' ? 'winking' : ''}`}
        ></div>
        <div
          className={`eye right ${mood === 'winking' ? 'winking' : ''}`}
        ></div>
        <div className={`cheek left ${mood}`}></div>
        <div className={`cheek right ${mood}`}></div>
        <div className={`mouth ${mood}`}></div>
      </div>
    </div>
  );
}
