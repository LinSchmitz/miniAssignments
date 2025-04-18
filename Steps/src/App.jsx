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
  return <main>Step</main>;
}

function Buttons() {
  return (
    <div>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
