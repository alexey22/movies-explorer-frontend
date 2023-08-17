import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';

import './Login.css';

function Login({ onLogin, tokenCheck }) {
  useEffect(() => {
    tokenCheck();
  }, []);

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <main className='login'>
      <NavLink className='login__logo' to='/'>
        <img src={logo} alt='Логотип' />
      </NavLink>

      <h1 className='login__title'>Рады видеть!</h1>
      <form
        onSubmit={(e) => onLogin(e, formValue.email, formValue.password)}
        className='login__form'
      >
        <label className='login__label' htmlFor='email'>
          E-mail
        </label>
        <input
          onChange={handleChange}
          value={formValue.email}
          className='login__input'
          name='email'
          type='email'
          required
          id='email'
          placeholder='E-mail'
        />
        <label className='login__label' htmlFor='password'>
          Пароль
        </label>
        <input
          onChange={handleChange}
          value={formValue.password}
          className='login__input'
          type='password'
          name='password'
          required
          id='password'
          placeholder='Пароль'
        />
        <button className='login__button' type='submit'>
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
