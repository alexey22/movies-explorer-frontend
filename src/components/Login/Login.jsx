import { NavLink, useNavigate } from 'react-router-dom';

import logo from './logo.svg';

import './Login.css';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/movies');
  }

  return (
    <main className='login'>
      <NavLink className='login__logo' to='/'>
        <img src={logo} alt='Логотип' />
      </NavLink>

      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <label className='login__label' htmlFor='email'>
          E-mail
        </label>
        <input className='login__input' type='email' required id='email' />
        <label className='login__label' htmlFor='password'>
          Пароль
        </label>
        <input
          className='login__input'
          type='password'
          required
          id='password'
        />
        <button className='login__button' onClick={handleLogin}>
          Войти
        </button>
      </form>

      <div className='login__text'>
        Ещё не зарегистрированы?
        <NavLink className='login__link' to='/signup'>
          Регистрация
        </NavLink>
      </div>
    </main>
  );
}

export default Login;
