import React from 'react';
import './index.css';

const skills = [
  {
    skill: 'javaScript',
    level: 'beginner',
    color: 'yellow',
  },
  {
    skill: 'HTML + CSS',
    level: 'Advance',
    color: 'orangered',
  },
  {
    skill: 'Reactjs',
    level: 'Intermediate',
    color: 'blue',
  },
  {
    skill: 'GIT',
    level: 'Advance',
    color: 'orange',
  },
  {
    skill: 'PL/SQL',
    level: 'Advance',
    color: 'green',
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./public/img/avatar.png" alt="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <main className="intro">
      <h3>Lumi</h3>
      <p>
        Im a Full Stack developer,Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa cupiditate quis natus, perferendis dicta dolores
        excepturi quo amet sit cumque.
      </p>
    </main>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill skill="react" emoji="💪" color="#7886c7" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skills" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}
