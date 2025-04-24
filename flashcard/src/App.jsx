import React from 'react';
import './index.css';

const questions = [
  {
    id: 10,
    question: `What is the result of the following expression? 
                console.log(5 + "5");`,
    answer: `"55"`,
  },
  {
    id: 11,
    question: `What is the difference between 'let', 'const', and 'var' when declaring variables? `,
    answer: `'var' is function-scoped and can be redeclared.
    - 'let' is block-scoped and can be reassigned.
    - 'const' is block-scoped and cannot be reassigned.`,
  },
  {
    id: 12,
    question: `What does the '===' operator do in JavaScript?`,
    answer: `The '===' operator checks for both value and type equality.`,
  },
  {
    id: 13,
    question: ` How do you create an array in JavaScript?`,
    answer: `var myArray = [1, 2, 3, 4, 5];`,
  },
  {
    id: 14,
    question: ` How do you create an array in JavaScript?`,
    answer: `var myArray = [1, 2, 3, 4, 5];`,
  },
  {
    id: 15,
    question: ` How do you create an array in JavaScript?`,
    answer: `var myArray = [1, 2, 3, 4, 5];`,
  },
];

function App() {
  return <div>flashcard</div>;
}

export default App;
