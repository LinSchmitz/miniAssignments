import React, { useState } from 'react';

const initialItems = [
  {
    id: 1,
    name: 'MacBook Pro 16” M2',
    price: 2799,
    image: 'https://picsum.photos/id/1/300/200',
    description: ' M2 Pro chip, 16GB RAM, and 512GB SSD.',
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    price: 1499,
    image: 'https://picsum.photos/id/2/300/200',
    description: ' 12th Gen Intel i7, 16GB RAM, and 512GB SSD.',
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 1099,
    image: 'https://picsum.photos/id/3/300/200',
    description: ' A17 chip, 128GB storage, and titanium frame.',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    image: 'https://picsum.photos/id/4/300/200',
    description: ' Snapdragon 8 Gen 3, 200MP camera, and 5000mAh battery.',
  },
  {
    id: 5,
    name: 'Lenovo Legion 5 Pro',
    price: 1599,
    image: 'https://picsum.photos/id/5/300/200',
    description: ' AMD Ryzen 7, RTX 4070, 16GB RAM, and 1TB SSD.',
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [showAddItem, setShowAddItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleShowAddItem() {
    setShowAddItem(show => !show);
  }

  function handleAddItem(item) {
    setItems(items => [...items, item]);
    setShowAddItem(false);
  }

  function handleSelection(item) {
    // setSelectedItem(item);
    setSelectedItem(cur => (cur?.id === item.id ? null : item));
    setShowAddItem(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ItemList
          items={items}
          selectedItem={selectedItem}
          onSelection={handleSelection}
        />

        {showAddItem && <FormAddItem onAddItem={handleAddItem} />}
        <Button onClick={handleShowAddItem}>
          {showAddItem ? 'Close' : 'Add Item'}
        </Button>
      </div>
      {selectedItem && <FormBill selectedItem={selectedItem} />}
    </div>
  );
}

function ItemList({ items, onSelection, selectedItem }) {
  return (
    <ul>
      {items.map(item => (
        <Item
          item={item}
          key={item.id}
          selectedItem={selectedItem}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Item({ item, onSelection, selectedItem }) {
  const isSelected = selectedItem?.id === item.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={item.image} alt={item.name} />
      {item.name}
      {item.price}
      {item.description}
      <Button onClick={() => onSelection(item)}>
        {isSelected ? 'close' : 'Add to cart'}
      </Button>
    </li>
  );
}

function FormAddItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://picsum.photos/id');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name,
      price: 0,
      image: `${image}?=${id}/300/200`,
      description: '',
    };
    onAddItem(newItem);

    setName('');
    setImage('https://picsum.photos/id');
  }

  return (
    <form className="form-add-item" onSubmit={handleSubmit}>
      <label>💻 Item name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>➕ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormBill({ selectedItem }) {
  const [num, setNum] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const total = selectedItem.price * num;

  function handleNumPlus() {
    setNum(n => n + 1);
  }

  function handleNumMinues() {
    if (num <= 0) return;
    setNum(n => n - 1);
  }

  function handleRemove() {
    setNum(0);
    setIsShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    isShow && (
      <form className="form-bill" onSubmit={handleSubmit}>
        <h2>Cart</h2>

        <div className="cart-row">
          <div className="cart-info">
            <img src="https://picsum.photos/id/6/50" alt="" />
            <div>
              <h3>{selectedItem.name} </h3>
              <h3>${selectedItem.price}</h3>
            </div>
          </div>

          <div className="cart-actions">
            <Button onClick={handleNumMinues}>-</Button>
            <h3>{num}</h3>
            <Button onClick={handleNumPlus}>+</Button>
            <Button onClick={handleRemove}>&times;</Button>
          </div>
        </div>

        <h3 className="total">Total: ${Number(total)} </h3>

        <Button className="button buy-button">BUY</Button>
      </form>
    )
  );
}
