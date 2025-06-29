import { NavLink } from 'react-router-dom';

function PageNav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
