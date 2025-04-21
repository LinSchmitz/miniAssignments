import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleNextStep() {
  //   setStep(step => step + 1);
  // }

  // function handlePreCount() {
  //   setCount(count => count - 1);
  // }

  return (
    <div className="card">
      <div className="rows">
        <button onClick={() => setStep(s => s - 1)}>-</button>
        <h3>Step:{step} </h3>
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div>
      <div className="rows">
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <h3>Count:{count} </h3>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <p>
        {count} Days from today is {date.toDateString()}
      </p>
    </div>
  );
}
