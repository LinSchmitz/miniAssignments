// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage />
      <SelectPercentage />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <h4>How much was the bill? </h4>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage() {
  return (
    <div>
      <h4>How did you like the Service? </h4>
      <select>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was great(20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return (
    <div>
      <h4>
        You pay ${0}(${0} + $12 tip)
      </h4>
    </div>
  );
}

function Reset() {
  return <button>Reset</button>;
}
