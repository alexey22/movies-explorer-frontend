import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isLoggedIn }) {
  const location = useLocation();

  if (isLoggedIn) {
    return (
      <nav className='nav'>
        <Link
          to='/movies'
          className={`nav__link nav__link_type_movies ${
            location.pathname === '/movies' ? 'nav__link_type_active' : ''
          }`}
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`nav__link nav__link_type_movies ${
            location.pathname === '/saved-movies' ? 'nav__link_type_active' : ''
          }`}
        >
          Сохранённые фильмы
        </Link>
        <Link to='/profile' className='nav__link nav__link_type_profile'>
          Аккаунт <div className='nav__icon'></div>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className='nav'>
        <Link to='/signup' className='nav__link nav__link_type_signin'>
          Регистрация
        </Link>
        <Link to='/signin'>
          <button className='nav__button_type_login'>Войти</button>
        </Link>
      </nav>
    );
  }
}

export default Navigation;
