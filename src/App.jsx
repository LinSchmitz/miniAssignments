import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';
import { Footer } from '../src/Footer';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
