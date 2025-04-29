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
      <FriendList />
    </div>
  );
}

function FriendList() {
  return (
    <ul>
      {initialFriends.map(friend => (
        <li>
          {friend.name} {friend.balance}
        </li>
      ))}
    </ul>
  );
}
