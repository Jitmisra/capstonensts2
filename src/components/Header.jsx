import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/icon.jpeg" alt="Trivia Master Logo" className="logo-icon" />
        <h1>Trivia Master</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
