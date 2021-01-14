// Site Navigation
import './nav.css';

import { Link } from 'react-router-dom';

const Nav = () => (
  <header className='header'>
    <h1 className='site-logo'>
      <a href='/'>JBR</a>
    </h1>
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
