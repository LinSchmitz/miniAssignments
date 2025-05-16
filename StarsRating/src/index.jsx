import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}
    />
    <StarRating color="red" size={24} />
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating /> */}
  </React.StrictMode>
);
