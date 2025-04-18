import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="card">
      <Numbers />
      <Main />
      <Buttons />
    </div>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      <div className="number">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
    </div>
  );
}

function Main() {
  return (
    <main className="main">
      <p>step1 : sldvfdkjvbl\bd</p>
      <p>Step2 :sdn\kjcvbjkvbslj</p>
      <p>Step3 :abjsbljcbdsvlj</p>
    </main>
  );
}

function Buttons() {
  return (
    <div className="btns">
      <button className="btn">Previous</button>
      <button className="btn">Next</button>
    </div>
  );
}
