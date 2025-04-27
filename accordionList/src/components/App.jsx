// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const faqs = [
  {
    title: 'Bananas Are Berries',
    text: 'Botanically speaking, bananas are classified as berries, while strawberries are not.',
  },
  {
    title: 'Octopuses Have Three Hearts',
    text: 'Two pump blood to the gills, while the third pumps it to the rest of the body.',
  },
  {
    title: 'Hot Water Freezes Faster',
    text: 'This phenomenon is known as the Mpemba effect, and scientists are still studying why it happens.',
  },
  {
    title: 'Sharks Precede Trees',
    text: 'Sharks have existed for over 400 million years, while trees evolved around 350 million years ago.',
  },
  {
    title: 'Sloths Can Hold Their Breath Longer Than Dolphins',
    text: 'A sloth can hold its breath for up to 40 minutes by slowing its heart rate.',
  },
  // {
  //   title: 'The Eiffel Tower Grows in Summer',
  //   text: 'Due to heat expansion, the Eiffel Tower can grow about 6 inches taller during hot days.',
  // },
  // {
  //   title: "You Can't Hum While Holding Your Nose",
  //   text: 'Humming requires air to pass through your nose, so blocking it makes humming impossible.',
  // },
  // {
  //   title: 'A Day on Venus Is Longer Than Its Year',
  //   text: 'Venus takes 243 Earth days to rotate once but only 225 Earth days to orbit the Sun.',
  // },
  // {
  //   title: 'Butterflies Can Taste With Their Feet',
  //   text: 'Taste sensors on a butterfly’s feet help them identify plants suitable for laying eggs.',
  // },
];

export default function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onCurOpen={setCurOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ num, curOpen, onCurOpen, title, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onCurOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1} </p>
      <p className="title">{title} </p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <p className="content-box">{children} </p>}
    </div>
  );
}
