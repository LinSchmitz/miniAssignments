import React, { useState } from 'react';
import './index.css';

const msg = ['Learn javaScript', 'Learn Reactjs', 'Code alot'];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step <= 1) return null;
    setStep(s => s - 1);
  }

  function handleNext() {
    if (step >= 3) return null;
    setStep(s => s + 1);
  }

  return (
    <div className="card">
      <div className="numbers">
        <div className="number">
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>

        <main className="main">
          <p>
            Steps {step}: {msg[step - 1]}{' '}
          </p>
        </main>
      </div>

      <div className="btns">
        <button className="btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
