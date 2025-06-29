// import PageNav from '../components/PageNav';

export default function About() {
  return (
    <main>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          lineHeight: '1.6',
          textAlign: 'justify',
          fontFamily: 'inherit',
          marginTop: '2rem',
          marginBottom: '1rem',
        }}
      >
        {`Welcome to Mini Codes — a growing collection of mini web projects built with React, CSS and JavaScript. Each project here is crafted to explore, practice, and demonstrate specific concepts in frontend development — from simple UI interactions to full-featured mini-apps. 
This site serves as: 

📚 A learning journal for my journey in web development 
🔧 A showcase of practical, bite-sized apps and components 
🚀 A place to get inspired, learn from code, or contribute ideas.

You’ll find: Useful tools like weather apps, flashcards, and expense splitters. Fun experiments with animations, API integrations, and state logic. Clean, open-source code you can view and reuse.
All projects are open source — check out the `}
        <a
          target="_blank"
          href="https://github.com/LinSchmitz/miniAssignments/tree/main"
          rel="noreferrer"
        >
          GitHub links
        </a>
        for code and feel free to try out live previews.
      </pre>
    </main>
  );
}
