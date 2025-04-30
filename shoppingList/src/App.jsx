// eslint-disable-next-line no-unused-vars
import React from 'react';

const initialData = [
  {
    id: 118836,
    name: 'Chair',
    image: 'https://i.pravatar.cc/48?u=118836',
  },
  {
    id: 933372,
    name: 'Table',
    image: 'https://i.pravatar.cc/48?u=933372',
  },
  {
    id: 499476,
    name: 'Sofa',
    image: 'https://i.pravatar.cc/48?u=499476',
  },
];

export default function App() {
  return (
    <div className="app">
      <Products />
      <AddItems />
      <Bill />
    </div>
  );
}

function Products() {
  return (
    <ul>
      {initialData.map(item => (
        <ProductsList item={item} key={item.id} />
      ))}
    </ul>
  );
}

function ProductsList({ item }) {
  return <li>{item.name}</li>;
}

function AddItems() {
  return <div>AddItems</div>;
}

function Bill() {
  return <div>Bill</div>;
}
