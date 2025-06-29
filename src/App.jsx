import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';
import { Footer } from '../src/Footer';

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

function Header() {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/" className="square101">
            <span>Mini Codes</span>
          </NavLink>
        </div>
        <div className="searchbtn">
          <label htmlFor="search">Search</label>
          <input id="search" type="search" pattern=".*\S.*" required />
          <span className="caret"></span>
        </div>
      </nav>
    </header>
  );
}

export default App;
