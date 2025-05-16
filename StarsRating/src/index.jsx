import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="Orange" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}
    />
    <StarRating color="red" size={24} />
    <StarRating color="blue" defaultRating={3} />
    <StarRating maxRating={10} />
    <Test />
    {/* <StarRating /> */}
  </React.StrictMode>
);
