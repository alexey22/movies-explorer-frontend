import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
  return (
    <section className='reg'>
      <h1 className='reg__title'>Добро пожаловать!</h1>
      <form className='reg__form'>
        <label className='reg__label' htmlFor='name'>
          Имя
        </label>
        <input className='reg__input' id='name' type='text' />
        <label className='reg__label' htmlFor='name'>
          E-mail
        </label>
        <input className='reg__input' type='email' />
        <label className='reg__label' htmlFor='name'>
          Пароль
        </label>
        <input className='reg__input' type='password' />
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
