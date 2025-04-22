import React from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 2, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🩴 Far Away ✈️</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do You need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  console.log(initialItems);

  return (
    <div className="list">
      <ul>
        {initialItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'Line-through' } : {}}>
        {item.description}
        {item.quantity}
      </span>
      <button>X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🩴 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
