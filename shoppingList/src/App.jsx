// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const initialItems = [
  {
    id: 1,
    name: 'MacBook Pro 16” M2',
    price: 2799,
    image: 'https://picsum.photos/id/1/300',
    description: ' M2 Pro chip, 16GB RAM, and 512GB SSD.',
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    price: 1499,
    image: 'https://picsum.photos/id/2/300',
    description: ' 12th Gen Intel i7, 16GB RAM, and 512GB SSD.',
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 1099,
    image: 'https://picsum.photos/id/6/300',
    description: ' A17 chip, 128GB storage, and titanium frame.',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    image: 'https://picsum.photos/id/6/300',
    description: ' Snapdragon 8 Gen 3, 200MP camera, and 5000mAh battery.',
  },
  {
    id: 5,
    name: 'Lenovo Legion 5 Pro',
    price: 1599,
    image: 'https://picsum.photos/id/6/300',
    description: ' AMD Ryzen 7, RTX 4070, 16GB RAM, and 1TB SSD.',
  },
];

export default function App() {
  const [quantities, setQuantities] = useState(false);

  function handleRemoveItems(id) {
    console.log('Remove item with ID:', id);
    setQuantities(false);
  }

  return (
    <div className="app">
      <ItemsList
        quantities={quantities}
        onQuantities={setQuantities}
        onRemoveItems={handleRemoveItems}
      />
      <FormBill />
    </div>
  );
}

function ItemsList({ quantities, onQuantities, onRemoveItems }) {
  const items = initialItems;

  return (
    <ul>
      {items.map(item => (
        <Item
          item={item}
          key={item.id}
          quantities={quantities}
          onQuantities={onQuantities}
          onRemoveItems={onRemoveItems}
        />
      ))}
    </ul>
  );
}

function Item({ item, quantities, onQuantities, onRemoveItems }) {
  function handleAdd() {
    onQuantities(!quantities);
  }

  return (
    <li>
      <img src={item.image} alt={item.name} />
      <div className="items">
        <h3>{item.name}</h3>
        <span>{item.description}</span>

        <div className="price-and-button">
          €{item.price}
          <button
            className={quantities ? 'empty' : 'btn'}
            onClick={() => handleAdd(item.id)}
          >
            {quantities ? '' : 'Add to cart'}
          </button>
        </div>
        {quantities && (
          <div>
            <AddItems onRemoveItems={onRemoveItems} itemId={item.id} />
          </div>
        )}
      </div>
    </li>
  );
}

function AddItems({ itemId, onRemoveItems }) {
  return (
    <div className="btn-items ">
      <Button>-</Button>
      <h3>X</h3>
      <Button>+</Button>
      <Button className="btn-remove" onClick={() => onRemoveItems(itemId)}>
        Remove
      </Button>
    </div>
  );
}

function FormBill() {
  return (
    <form className="form-bill">
      <h2>Items List</h2>
    </form>
  );
}

function Button({ children }) {
  return <button className="btn">{children} </button>;
}
