// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function App() {
  return (
    <div>
      <Bill />
      <Percentage />
      <Service />
      <Receipt />
      <Reset />
    </div>
  );
}

function Bill() {
  return (
    <div>
      <h4>How much was the bill? </h4>
      <input type="text" />
    </div>
  );
}

function Percentage() {
  return (
    <div>
      <h4>How did you like the Service? </h4>
      <select name="good" id="">
        <option value="ok">It was ok(5%)</option>
        <option value="good">It was good(10%)</option>
        <option value="great">It was great(20%)</option>
      </select>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h4>How did your friend like the Service? </h4>
      <select name="good" id="">
        <option value="ok">It was ok(5%)</option>
        <option value="good">It was good(10%)</option>
        <option value="great">It was great(20%)</option>
      </select>
    </div>
  );
}

function Receipt() {
  return (
    <div>
      <h4>You pay ${92}($80+$12 tip) </h4>
    </div>
  );
}

function Reset() {
  return <button>Reset</button>;
}
