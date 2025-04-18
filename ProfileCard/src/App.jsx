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
  const allSkills = skills;

  return (
    <div className="skill-list">
      <ul>
        {allSkills.map(skill => (
          <Skill skillsObj={skill} key={skill.skill} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skillsObj }) {
  return (
    <li>
      <div className="skill" style={{ backgroundColor: skillsObj.color }}>
        <span>
          {skillsObj.skill}
          {skillsObj.emoji}
        </span>
      </div>
    </li>
  );
}
