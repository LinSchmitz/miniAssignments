import { useState } from 'react';

const cardData = [
  {
    id: 'travel',
    icon: '✈️',
    title: 'Travel List App',
    description: `This is a simple React application that helps users manage a packing list before going on a trip...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/travelList',
    previewLink: 'https://mini-assignments-uh6k.vercel.app/',
  },
  {
    id: 'weather',
    icon: '🌥️',
    title: 'Weather App',
    description: `A simple weather forecast app built with React and the OpenWeatherMap API...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/weather-app',
    previewLink: 'https://mini-assignments-y1pv.vercel.app/',
  },
  {
    id: 'stepper',
    icon: '🪜',
    title: 'Stepper App',
    description: `A simple stepper app built with React. It allows the user to navigate through different steps...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/Steps',
    previewLink: 'https://mini-assignments-u21r.vercel.app/',
  },
  {
    id: 'bills',
    icon: '💸',
    title: 'Split The Bills',
    description: `An interactive React application that allows users to split expenses with friends...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/split-The-Bills',
    previewLink: 'https://mini-assignments-3zjv.vercel.app/',
  },
  {
    id: 'flashcard',
    icon: '🗃️',
    title: 'Flash Card',
    description: `A simple Flashcard App built with React to practice JavaScript interview questions...`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/flashcard',
    previewLink: 'https://mini-assignments-3fj8.vercel.app/',
  },
  {
    id: 'pizzamenu',
    icon: '🍕',
    title: 'Pizza Menu',
    description: `A fun and interactive pizza menu app built with React. Explore a list of delicious pizzas, check availability, and see dynamic updates based on opening hours.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/pizza-menu',
    previewLink: 'https://mini-assignments-ywrt.vercel.app/',
  },
  {
    id: 'moodTracker',
    icon: '👧🏼',
    title: 'Mood Tracker',
    description: `Track your mood each day with this interactive app and reflect on your mental wellness journey.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/moodTracker',
    previewLink: 'https://mini-assignments-ywrt.vercel.app/',
  },
];

export function Cards() {
  const [activeCard, setActiveCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openModal = (e, card) => {
    e.preventDefault();
    setActiveCard(card);
  };

  const closeModal = () => setActiveCard(null);

  // 👇 show first 6 if not showAll, otherwise all
  const visibleCards = showAll ? cardData : cardData.slice(0, 6);

  return (
    <section className="cards">
      {visibleCards.map(card => (
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

      {/* Show More / Show Less Button */}
      {cardData.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button className="more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'More'}
          </button>
        </div>
      )}

      {/* Modal Section */}
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
