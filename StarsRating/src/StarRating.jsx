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

const textStyle = {
  lineHeight: '1',
  margin: '0',
};

export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      <div style={starContainetStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1} </span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
