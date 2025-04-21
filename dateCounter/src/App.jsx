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
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} Days from today is `
            : `${count} Days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
