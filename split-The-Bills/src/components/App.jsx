// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}{' '}
    </button>
  );
}

export default function App() {
  const [showAddFreind, setShowAddFreind] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFreind, setSelectedFreind] = useState(null);

  function handleShowAddfreind() {
    setShowAddFreind(show => !show);
  }

  function handleAddFreind(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFreind(false);
  }

  function handleSelectedFreind(freind) {
    // setSelectedFreind(freind);
    setSelectedFreind(cur => (cur?.id === freind.id ? null : freind));
    setShowAddFreind(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFreind.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFreind(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFreind={selectedFreind}
          onSelectedFreind={handleSelectedFreind}
        />

        {showAddFreind && <FormAddFreind onAddFreind={handleAddFreind} />}

        <Button onClick={handleShowAddfreind}>
          {showAddFreind ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selectedFreind && (
        <FormSplitBill
          selectedFreind={selectedFreind}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectedFreind, selectedFreind }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFreind={selectedFreind}
          onSelectedFreind={onSelectedFreind}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectedFreind, selectedFreind }) {
  const isSelected = selectedFreind?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''} key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} €{Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you €{Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even </p>}

      <Button onClick={() => onSelectedFreind(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

function FormAddFreind({ onAddFreind }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFreind = {
      id,
      name,
      image: `${image}?=${id} `,
      balance: 0,
    };

    onAddFreind(newFreind);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>🏞️ Image Url</label>
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFreind, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFreind = bill ? bill - paidByUser : '';
  const [whoIsPaing, setWhoIsPaing] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaing === 'user' ? paidByFreind : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFreind.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label>🧑🏼‍🦰 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👧🏼 {selectedFreind.name} expense </label>
      <input type="text" disabled value={paidByFreind} />

      <label>🤑 Who is paying the bill?</label>
      <select value={whoIsPaing} onChange={e => setWhoIsPaing(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFreind.name} </option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
