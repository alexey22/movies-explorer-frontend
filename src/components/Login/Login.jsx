import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';

import './Login.css';

import validate from '../../utils/validate';

function Login({ onLogin, tokenCheck, loginError, setLoginError }) {
  useEffect(() => {
    setLoginError();
    tokenCheck({ isBack: true });
  }, []);

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    initial: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginError();

    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (name === 'email') {
      setIsValid({ ...isValid, email: validate.Email(value), initial: false });
    }

    if (name === 'password') {
      setIsValid({
        ...isValid,
        password: validate.Password(value),
        initial: false,
      });
    }
  };

  return (
    <main className='login'>
      <NavLink className='login__logo' to='/'>
        <img src={logo} alt='Логотип' />
      </NavLink>

      <h1 className='login__title'>Рады видеть!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(formValue.email, formValue.password);
        }}
        className='login__form'
      >
        <label className='login__label' htmlFor='email'>
          E-mail
        </label>
        <input
          onChange={handleChange}
          value={formValue.email}
          className={
            isValid.email
              ? 'login__input'
              : 'login__input login__input_type_error'
          }
          name='email'
          type='email'
          required
          id='email'
          placeholder='E-mail'
        />
        <span className='login__error-message login__error-message_type_email'>
          {!isValid.email ? 'Некорректный E-mail' : ' '}
        </span>

        <label className='login__label' htmlFor='password'>
          Пароль
        </label>
        <input
          onChange={handleChange}
          value={formValue.password}
          className={
            isValid.password
              ? 'login__input'
              : 'login__input login__input_type_error'
          }
          type='password'
          name='password'
          required
          id='password'
          placeholder='Пароль'
        />
        <span className='login__error-message login__error-message_type_password'>
          {!isValid.password ? 'Минимальная длина пароля 8 символов' : ' '}
        </span>

        <span className='login__error'>{loginError}</span>

        <button
          className={
            isValid.email && isValid.password && !isValid.initial
              ? 'login__button '
              : 'login__button login__button_disabled'
          }
          disabled={!(isValid.email && isValid.password) || isValid.initial}
          type='submit'
        >
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
