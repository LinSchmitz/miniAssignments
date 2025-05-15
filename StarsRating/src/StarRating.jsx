// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function StarRating() {
  return (
    <div>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1} </span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
