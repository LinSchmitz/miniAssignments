import React from 'react';
import './index.css';

const msg = ['Learn javaScript', 'Learn Reactjs', 'Code alot'];

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
      <div className="number">
        <div className="activ">1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

function Main() {
  const step = 1;
  return (
    <main className="main">
      <p>
        Steps {step}: {msg[step - 1]}{' '}
      </p>
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
