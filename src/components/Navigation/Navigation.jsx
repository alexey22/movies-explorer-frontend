import { NavLink } from 'react-router-dom';

import './Navigation.css';
import { useState, useEffect } from 'react';

function Navigation({ isLoggedIn }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  function handleCloseMenu() {
    document
      .querySelector('.nav__mobile')
      .classList.remove('nav__mobile_state_open');

    document
      .querySelector('.nav__mobile-shadow')
      .classList.remove('nav__mobile-shadow_state_open');
  }

  function handleOpenMenu() {
    document
      .querySelector('.nav__mobile')
      .classList.add('nav__mobile_state_open');

    document
      .querySelector('.nav__mobile-shadow')
      .classList.add('nav__mobile-shadow_state_open');
  }

  if (isLoggedIn) {
    if (windowWidth > 768) {
      return (
        <nav className='nav'>
          <NavLink to='/movies' className='nav__link nav__link_type_movies'>
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='nav__link nav__link_type_movies'
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink to='/profile' className='nav__link nav__link_type_profile'>
            Аккаунт <div className='nav__icon'></div>
          </NavLink>
        </nav>
      );
    } else {
      return (
        <nav className='nav'>
          <button className='nav__burger' onClick={handleOpenMenu}></button>
          <div className='nav__mobile-shadow'></div>
          <div className='nav__mobile'>
            <button className='nav__close' onClick={handleCloseMenu} />
            <NavLink
              to='/'
              className='nav__link nav__link_type_movies-mobile nav__link_type_main-mobile'
            >
              Главная
            </NavLink>
            <NavLink
              to='/movies'
              className='nav__link nav__link_type_movies-mobile'
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className='nav__link nav__link_type_movies-mobile'
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              to='/profile'
              className='nav__link nav__link_type_profile-mobile'
            >
              Аккаунт <div className='nav__icon'></div>
            </NavLink>
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className='nav'>
        <NavLink to='/signup' className='nav__link nav__link_type_signin'>
          Регистрация
        </NavLink>

        <NavLink className='nav__link nav__link_type_button' to='/signin'>
          Войти
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
