import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className='limiter'>
      <div className='div-logo'>
        <img src={ logo } alt="Logo PaintMate" />
        <a href="/">
          <h1>PaintMate</h1>
        </a>
      </div>

      <nav>
        <ul>
          <li><a href="/">Calculadora</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
