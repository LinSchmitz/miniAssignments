// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './index.css';

const msg = ['Learn javaScript', 'Learn Reactjs', 'Code alot'];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(s => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(s => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="card">
          <div className="numbers">
            <div className="number">
              <div className={step >= 1 ? 'active' : ''}>1</div>
              <div className={step >= 2 ? 'active' : ''}>2</div>
              <div className={step >= 3 ? 'active' : ''}>3</div>
            </div>
          </div>

          <StepMessage step={step}>{msg[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#f4eeff"
              onClick={handlePrevious}
            >
              <span>👈🏼</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#f4eeff" onClick={handleNext}>
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Steps {step}</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, onClick, textColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
