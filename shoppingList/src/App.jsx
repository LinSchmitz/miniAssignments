// eslint-disable-next-line no-unused-vars
import React from 'react';

const productsList = [
  {
    id: 1,
    name: 'MacBook Pro 16” M2',
    price: 2799,
    image: 'https://picsum.photos/id/1/300',
    description:
      "Apple's high-performance laptop with M2 Pro chip, 16GB RAM, and 512GB SSD.",
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    price: 1499,
    image: 'https://picsum.photos/id/2/300',
    description:
      'Sleek Windows ultrabook with 12th Gen Intel i7, 16GB RAM, and 512GB SSD.',
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 1099,
    image: 'https://picsum.photos/id/6/300',
    description:
      'Apple’s latest iPhone with A17 chip, 128GB storage, and titanium frame.',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    image: 'https://picsum.photos/id/6/300',
    description:
      'Flagship Android phone with Snapdragon 8 Gen 3, 200MP camera, and 5000mAh battery.',
  },
  {
    id: 5,
    name: 'Lenovo Legion 5 Pro',
    price: 1599,
    image: 'https://picsum.photos/id/6/300',
    description:
      'Gaming laptop with AMD Ryzen 7, RTX 4070, 16GB RAM, and 1TB SSD.',
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
      {productsList.map(item => (
        <ProductsList item={item} key={item.id} />
      ))}
    </ul>
  );
}

function ProductsList({ item }) {
  return (
    <li>
      <img src={item.image} />
      <div className="items">
        <span>{item.name}</span>
        <span>{item.description}</span>
        <span>€{item.price}</span>
      </div>
    </li>
  );
}

function AddItems() {
  return <div>AddItems</div>;
}

function Bill() {
  return <div>Bill</div>;
}
