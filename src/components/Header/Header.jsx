import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './Header.css';

import logo from './logo.svg';

function Header({ isLoggedIn }) {
  const location = useLocation();

  return (
    <header
      className={`header header_color_${
        location.pathname === '/' ? 'portfolio' : 'movies'
      }`}
    >
      <Link to='/'>
        <img
          className='header__logo'
          src={logo}
          alt='Логотип Movies Explorer'
        ></img>
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
