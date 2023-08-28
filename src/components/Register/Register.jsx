import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

import './Register.css';

import validate from '../../utils/validate';

function Register({ onRegister, registerError, setRegisterError }) {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
  });

  useEffect(() => {
    setRegisterError();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterError();

    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (name === 'name') {
      setIsValid({ ...isValid, name: validate.Name(value) });
    }

    if (name === 'email') {
      setIsValid({ ...isValid, email: validate.Email(value) });
    }

    if (name === 'password') {
      setIsValid({
        ...isValid,
        password: validate.Password(value),
      });
    }
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
          className={
            isValid.name ? 'reg__input' : 'reg__input reg__input_type_error'
          }
          type='text'
          id='name'
          name='name'
          required
          placeholder='Имя'
        />
        <span className='reg__error-massage reg__error-message_type_name'>
          {!isValid.name ? 'Только латиница, кириллица, пробел, дефис' : ''}
        </span>

        <label className='reg__label' htmlFor='email'>
          E-mail
        </label>
        <input
          value={formValue.email}
          onChange={handleChange}
          className={
            isValid.email ? 'reg__input' : 'reg__input reg__input_type_error'
          }
          required
          type='email'
          name='email'
          id='email'
          placeholder='E-mail'
        />
        <span className='reg__error-massage reg__error-message_type_email'>
          {!isValid.email ? 'Некорректный E-mail' : ''}
        </span>

        <label className='reg__label' htmlFor='password'>
          Пароль
        </label>
        <input
          value={formValue.password}
          onChange={handleChange}
          className={
            isValid.password ? 'reg__input' : 'reg__input reg__input_type_error'
          }
          required
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
        />
        <span className='reg__error-massage reg__error-message_type_password'>
          {!isValid.password ? 'Минимальная длина пароля 8 символов' : ''}
        </span>

        <span className='reg__error'>{registerError}</span>

        <button
          type='submit'
          className={
            isValid.name &&
            isValid.email &&
            isValid.password &&
            formValue.name &&
            formValue.email &&
            formValue.password
              ? 'reg__button '
              : 'reg__button reg__button_disabled'
          }
          disabled={
            !(
              isValid.name &&
              isValid.email &&
              isValid.password &&
              formValue.name &&
              formValue.email &&
              formValue.password
            )
          }
        >
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
