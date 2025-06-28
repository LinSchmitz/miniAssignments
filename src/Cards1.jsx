import { useState } from 'react';

export function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    e.preventDefault(); // Prevent anchor tag navigation
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="cards">
      <div className="card">
        <div>
          ✈️ <strong> Travel List App </strong>
        </div>
        <div className="btns">
          <button className="show-modal" onClick={openModal}>
            info
          </button>

          {/* Modal - moved outside of cards */}
          {isModalOpen && (
            <>
              <div className="overlay" onClick={closeModal}></div>
              <div className="modal">
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <h1>✈️ Travel List App</h1>
                <p>
                  This is a simple React application that helps users manage a
                  packing list before going on a trip. It uses: useState to
                  manage app state (list of items, form inputs). Props to pass
                  functions and data between components. Event handling to
                  update the UI (add, delete, toggle). Conditional rendering
                  (cross out packed items). Component composition (splitting the
                  app into smaller pieces). A simple React app to manage your
                  travel items, allowing you to add, track, and mark items as
                  packed for your upcoming trip.
                </p>
              </div>
            </>
          )}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LinSchmitz/miniAssignments/tree/main/travelList"
            className="code"
          >
            <button>Code</button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mini-assignments-uh6k.vercel.app/"
            className="preview"
          >
            <button>Preview</button>
          </a>
        </div>
      </div>
    </section>
  );
}
