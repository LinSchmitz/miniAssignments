// eslint-disable-next-line no-unused-vars
import React from 'react';

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

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFreind />
        <Button>Add friend</Button>
      </div>
      <div className="form-split-bill">
        <FormSplitBill />
      </div>
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li key={friend.id}>
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
      <Button>Select</Button>
    </li>
  );
}

function FormAddFreind() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input type="text" />

      <label> Image Url</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children} </button>;
}

function FormSplitBill() {
  return (
    <form>
      <h3>Split Bill with {}</h3>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>👦🏼 Your expense</label>
      <input type="text" />

      <label>👧🏼 {} expense </label>
      <input type="text" />

      <h3>🤑 Who is paying the bill?</h3>
      <Button>Split Bill</Button>
    </form>
  );
}
