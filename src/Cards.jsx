import { useState } from 'react';

const cardData = [
  {
    id: 'travel',
    icon: '✈️',
    title: 'Travel List App',
    description: `This is a simple React application that helps users manage a packing list before going on a trip...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/travelList',
    previewLink: 'https://mini-assignments-uh6k.vercel.app/',
  },
  {
    id: 'weather',
    icon: '🌥️',
    title: 'Weather App',
    description: `A simple weather forecast app built with React and the OpenWeatherMap API...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/weather-app',
    previewLink: 'https://mini-assignments-y1pv.vercel.app/',
  },
  {
    id: 'stepper',
    icon: '🪜',
    title: 'Stepper App',
    description: `A simple stepper app built with React. It allows the user to navigate through different steps...`,
    codeLink: 'https://github.com/LinSchmitz/miniAssignments/tree/main/Steps',
    previewLink: 'https://mini-assignments-u21r.vercel.app/',
  },
  {
    id: 'bills',
    icon: '💸',
    title: 'Split The Bills',
    description: `An interactive React application that allows users to split expenses with friends...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/split-The-Bills',
    previewLink: 'https://mini-assignments-3zjv.vercel.app/',
  },
  {
    id: 'flashcard',
    icon: '🗃️',
    title: 'Flash Card',
    description: `A simple Flashcard App built with React to practice JavaScript interview questions...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/flashcard',
    previewLink: 'https://mini-assignments-3fj8.vercel.app/',
  },
];

export function Cards() {
  const [activeCard, setActiveCard] = useState(null);

  const openModal = (e, card) => {
    e.preventDefault();
    setActiveCard(card);
  };

  const closeModal = () => setActiveCard(null);

  return (
    <section className="cards">
      {cardData.map(card => (
        <div className="card" key={card.id}>
          <div>
            {card.icon} <strong>{card.title}</strong>
          </div>
          <div className="btns">
            <button className="show-modal" onClick={e => openModal(e, card)}>
              info
            </button>
            <a
              target="_blank"
              rel="noreferrer"
              href={card.codeLink}
              className="code"
            >
              <button>Code</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={card.previewLink}
              className="preview"
            >
              <button>Preview</button>
            </a>
          </div>
        </div>
      ))}

      {/* Render modal only once at the end, with proper card content */}
      {activeCard && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h1>
              {activeCard.icon} {activeCard.title}
            </h1>
            <p>{activeCard.description}</p>
          </div>
        </>
      )}
    </section>
  );
}
