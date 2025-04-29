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
      <dov className="sidebar">
        <FriendsList />
      </dov>
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map(friend => (
        <Friend
          name={friend.name}
          balance={friend.balance}
          id={friend.id}
          key={friends.id}
        />
      ))}
    </ul>
  );
}

function Friend({ id, name, balance }) {
  return (
    <li key={id}>
      {name} {balance}
    </li>
  );
}
