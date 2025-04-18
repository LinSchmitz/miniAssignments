import React from 'react';
import './index.css';

const skills = [
  {
    skill: 'javaScript',
    level: 'beginner',
    color: '#2d336b',
  },
  {
    skill: 'HTML + CSS',
    level: 'Advance',
    color: '#7886c7',
  },
  {
    skill: 'Reactjs',
    level: 'Intermediate',
    color: '#211c84',
  },
  {
    skill: 'GIT',
    level: 'Advance',
    color: '#7886c7',
  },
  {
    skill: 'PL/SQL',
    level: 'Advance',
    color: '#7886c7',
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
  // const allSkills = skills;

  return (
    <ul className="skill-list">
      {skills.map(skill => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  console.log(level);
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'Advance' && '💪'}
        {level === 'Intermediate' && '👩‍💻'}
        {level === 'beginner' && '😊'}
      </span>
    </li>
  );
}
