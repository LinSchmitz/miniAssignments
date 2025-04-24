import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="app">
      <h3>Mood tracker</h3>
      <EmojiRow onSelectMood={setSelectedMood} />
      <Main selectedMood={selectedMood} />
    </div>
  );
}

function EmojiRow({ onSelectMood }) {
  return (
    <div className="container">
      <div className="emoji-row">
        <SmillyEmoji mood="happy" title="happy" onClick={onSelectMood} />
        <SmillyEmoji mood="good" title="good" onClick={onSelectMood} />
        <SmillyEmoji
          mood="surprised"
          title="surprised"
          onClick={onSelectMood}
        />
        <SmillyEmoji mood="sad" title="sad" onClick={onSelectMood} />
        <SmillyEmoji mood="supersad" title="super sad" onClick={onSelectMood} />
        <SmillyEmoji mood="angry" title="angry" onClick={onSelectMood} />
      </div>
    </div>
  );
}

function SmillyEmoji({ mood, title, onClick }) {
  return (
    <div
      className={`emoji ${mood}`}
      title={title}
      onClick={() => onClick({ mood, title })}
    >
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

function Main({ selectedMood }) {
  if (!selectedMood) return <main>Select a mood</main>;

  return (
    <main>
      <h4>Current Mood:</h4>
      <div style={{ marginTop: '1rem' }}>
        <SmillyEmoji mood={selectedMood.mood} title={selectedMood.title} />
        <p>{selectedMood.title}</p>
      </div>
    </main>
  );
}
