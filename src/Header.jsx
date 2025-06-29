import { NavLink } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <div className="nav-left">
          <NavLink to="/" className="square101">
            <span>Mini Codes</span>
          </NavLink>
        </div>

        <div className="searchbtn">
          <label htmlFor="search">Search</label>
          <input id="search" type="search" pattern=".*\S.*" required />
          <span className="caret"></span>
        </div>
        <PageNav />
      </nav>
    </header>
  );
}

export default Header;
