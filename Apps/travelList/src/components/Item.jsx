// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'Line-through' } : {}}>
        {item.description}
        {item.quantity}
      </span>
      <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </li>
  );
}
