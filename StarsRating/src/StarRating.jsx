// eslint-disable-next-line no-unused-vars
import React from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainetStyle = {
  display: 'flex',
  gap: '4px',
};

export default function StarRating() {
  return (
    <div style={containerStyle}>
      <div style={starContainetStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1} </span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
