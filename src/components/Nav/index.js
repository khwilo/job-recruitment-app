// Site Navigation
import './nav.css';

const Nav = () => (
  <header className='header'>
    <h1 className='site-logo'>
      <a href='/'>JBR</a>
    </h1>
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a className='nav__link' href='/'>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='/about'>
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
