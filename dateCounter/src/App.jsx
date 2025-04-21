import React from 'react';
import { useState } from 'react';

export default function App() {
  const dt = new Date().toLocaleDateString();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handlePreStep() {
    setStep(step => step - 1);
  }

  function handleNextStep() {
    setStep(step => step + 1);
  }

  function handlePreCount() {
    setCount(count => count - 1);
    dt == dt + count;
  }

  function handleNextCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="card">
      <div className="rows">
        <button onClick={handlePreStep}>-</button>
        <h3>Step:{step} </h3>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="rows">
        <button onClick={handlePreCount}>-</button>
        <h3>Count:{count} </h3>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {count} Days from today is {dt}
      </p>
    </div>
  );
}
