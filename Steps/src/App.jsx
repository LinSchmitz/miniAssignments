import React from 'react';
import './index.css';

const msg = ['Learn javaScript', 'Learn Reactjs', 'Code alot'];

export default function App() {
  return (
    <div className="card">
      <Numbers />
      <Buttons />
    </div>
  );
}

function Numbers() {
  const step = 1;
  return (
    <div className="numbers">
      <div className="number">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <Main step={step} />
    </div>
  );
}

function Main({ step }) {
  return (
    <main className="main">
      <p>
        Steps {step}: {msg[step - 1]}{' '}
      </p>
    </main>
  );
}

function handlePrevious() {
  alert('prev');
}

function handleNext() {
  alert('Next');
}

function Buttons() {
  return (
    <div className="btns">
      <button className="btn" onClick={handlePrevious}>
        Previous
      </button>
      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
