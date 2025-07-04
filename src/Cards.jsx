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
    description: `A fun and interactive pizza menu app built with React.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/pizza-menu',
    previewLink: 'https://mini-assignments-ywrt.vercel.app/',
  },
  {
    id: 'moodTracker',
    icon: '👧🏼',
    title: 'Mood Tracker',
    description: `A simple and interactive React app that lets users track their current mood. 
                  Built for practicing React state management with useState.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/moodTracker',
    previewLink: 'https://mini-assignments-5o7w.vercel.app/',
  },
  {
    id: 'accordionList',
    icon: '➕',
    title: 'Accordion List',
    description: `A simple and interactive React app that displays fun random facts in an accordion layout. 
                  Built for practicing React components and useState management.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/accordionList',
    previewLink: 'https://mini-assignments-tfof.vercel.app/',
  },
  {
    id: 'ProfileCard',
    icon: '🧬',
    title: 'Profile Card',
    description: `A simple and interactive React app that displays fun random facts in an accordion layout. 
                  Built for practicing React components and useState management.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/ProfileCard',
    previewLink: 'https://mini-assignments-ursg.vercel.app/',
  },
  {
    id: 'darkModePortfolio',
    icon: '🌐',
    title: 'Dark Mode Portfolio',
    description: `Welcome to my personal portfolio website built using **HTML**, **CSS**, and **JavaScript**.
                  This website serves as my digital space to showcase my skills, projects, and online presence.`,
    codeLink:
      'https://github.com/LinSchmitz/miniAssignments/tree/main/Apps/darkModePortfolio',
    previewLink: 'https://darkmodeportfolio-sch.netlify.app/',
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

  const visibleCards = showAll ? cardData : cardData.slice(0, 6);

  return (
    <div>
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

        {/* Modal */}
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
      </section>{' '}
      {/* More / Show Less Button below the cards, same row */}
      {cardData.length > 6 && (
        <div className="more-btn-wrapper">
          <button
            className="more-btn"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? 'Show Less' : 'More'}
          </button>
        </div>
      )}
    </div>
  );
}
