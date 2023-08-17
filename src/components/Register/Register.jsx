import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

import './Register.css';

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: '',
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
    <main className='reg'>
      <Link to='/' className='reg__logo'>
        <img src={logo} alt='Логотип' className='reg__logo-image' />
      </Link>
      <h1 className='reg__title'>Добро пожаловать!</h1>
      <form
        onSubmit={(e) =>
          onRegister(e, formValue.name, formValue.email, formValue.password)
        }
        className='reg__form'
      >
        <label className='reg__label' htmlFor='name'>
          Имя
        </label>
        <input
          value={formValue.name}
          onChange={handleChange}
          className='reg__input'
          type='text'
          id='name'
          name='name'
          required
          placeholder='Имя'
        />
        <label className='reg__label' htmlFor='email'>
          E-mail
        </label>
        <input
          value={formValue.email}
          onChange={handleChange}
          className='reg__input'
          required
          type='email'
          name='email'
          id='email'
          placeholder='E-mail'
        />
        <label className='reg__label' htmlFor='password'>
          Пароль
        </label>
        <input
          value={formValue.password}
          onChange={handleChange}
          className='reg__input reg__input_type_error'
          required
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
        />
        <span className='reg__error-massage'>Что-то пошло не так...</span>
        <button type='submit' className='reg__button'>
          Зарегистрироваться
        </button>
      </form>

      <div className='reg__text'>
        Уже зарегистрированы?
        <Link className='reg__link' to='/signin'>
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
