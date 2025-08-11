import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark-mode'); // <-- use <html>!
  };

  return (
    <div className="top">
      <nav>
        <div className="toggle">
          <span className="moon">🌙</span>
          <input type="checkbox" id="toggle-switch" onChange={toggleDarkMode} />
          <label htmlFor="toggle-switch">
            <span className="screen-reader-text">Toggle Color Scheme</span>
          </label>
          <span className="sun">☀️</span>
        </div>
      </nav>

      <div className="profile">
        <img
          className="profile-img"
          id="spinningLogo"
          src="img/profile.jpg"
          alt="profile"
        />
      </div>

      <div className="title">
        <h1>
          Hi there <span className="hi-empji">👋</span>
        </h1>
        <p className="intro">I'm ..., a Front-End Developer</p>
      </div>

      <div className="social-meida">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src="img/github.svg" alt="github" width="45" className="icons" />
        </a>

        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icons line"
            width="48"
            height="48"
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M16,17V14a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v3"
            />
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M20,21H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20A1,1,0,0,1,20,21ZM8,12v5m4-3V12"
            />
            <line
              x1="7.95"
              y1="7.5"
              x2="8.05"
              y2="7.5"
              stroke="#000"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
          </svg>
        </a>

        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icons line"
            width="48"
            height="48"
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M18.94,7.91A3.49,3.49,0,0,0,12,8.17C8.46,9.63,5,6,5,6c-1,6,2,8.75,2,8.75C5.64,16,3,16,3,16s1.58,3,8.58,3S19,11,19,11a3.08,3.08,0,0,0,2-3.3A7.9,7.9,0,0,1,18.94,7.91Z"
            />
          </svg>
        </a>
      </div>

      <section className="boxes">
        <div className="box-right">
          <a className="box" href="#">
            <h2>Biography</h2>
            <p>Find in-depth information about ...</p>
          </a>
          <a className="box" href="#">
            <h2>Experience</h2>
            <p>My working experience</p>
          </a>
        </div>
        <div className="box-left">
          <a className="box" href="#">
            <h2>Project</h2>
            <p>Ongoing projects</p>
          </a>
          <a className="box" href="#">
            <h2>Technologies</h2>
            <p>Stack and Technologies</p>
          </a>
        </div>
      </section>

      <footer>
        <p className="copyright">
          Made with ❤️ by
          <a
            className="Github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LinSchmitz"
          >
            LinSchmitz
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
