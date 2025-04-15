import React, { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      you have read <strong> {props.count} </strong> piese of Advice.
    </p>
  );
}
