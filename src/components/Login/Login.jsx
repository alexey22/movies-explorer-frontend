import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <label className='login__label' htmlFor='name'>
          E-mail
        </label>
        <input className='login__input' type='email' />
        <label className='login__label' htmlFor='name'>
          Пароль
        </label>
        <input className='login__input' type='password' />
        <button className='login__button'>Войти</button>
      </form>

      <div className='login__text'>
        Ещё не зарегистрированы?
        <Link className='login__link' to='/signup'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
