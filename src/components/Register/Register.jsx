import { Link } from 'react-router-dom';

import logo from './logo.svg';

import './Register.css';

function Register() {
  return (
    <section className='reg'>
      <Link to='/' className='reg__logo'>
        <img src={logo} alt='Логотип' className='reg__logo-image' />
      </Link>
      <h1 className='reg__title'>Добро пожаловать!</h1>
      <form className='reg__form'>
        <label className='reg__label' htmlFor='name'>
          Имя
        </label>
        <input className='reg__input' id='name' type='text' required />
        <label className='reg__label' htmlFor='email'>
          E-mail
        </label>
        <input className='reg__input' type='email' required id='email' />
        <label className='reg__label' htmlFor='password'>
          Пароль
        </label>
        <input
          className='reg__input reg__input_type_error'
          type='password'
          required
          id='password'
        />
        <span className='reg__error-massage'>Что-то пошло не так...</span>
        <button className='reg__button'>Зарегистрироваться</button>
      </form>

      <div className='reg__text'>
        Уже зарегистрированы?
        <Link className='reg__link' to='/signin'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
