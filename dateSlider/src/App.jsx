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
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="card">
      <div className="rows">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        />
        <span>{step} </span>
      </div>
      <div className="rows">
        <button onClick={() => setCount(c => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(c => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} Days from today is `
            : `${Math.abs(count)} Days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
