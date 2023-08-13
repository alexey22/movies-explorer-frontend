import Header from '../Header/Header';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  function handelLogout() {
    navigate('/');
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  let controls;

  if (isEditing) {
    controls = (
      <button className='profile__save-button' onClick={handleSave}>
        Сохранить
      </button>
    );
  } else {
    controls = (
      <>
        <button className='profile__edit-button' onClick={handleEdit}>
          Редактировать
        </button>
        <button className='profile__logout-button' onClick={handelLogout}>
          Выйти из аккаунта
        </button>
      </>
    );
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <label className='profile__label profile__label_no-1' htmlFor='name'>
            Имя
          </label>
          <input
            className='profile__input profile__input_no_1'
            type='text'
            id='name'
            value='Виталий'
            required
          />
          <div className='profile__line'></div>
          <label className='profile__label profile__label_no-2' htmlFor='email'>
            E-mail
          </label>
          <input
            className='profile__input profile__input_no-2'
            type='email'
            id='email'
            value='pochta@yandex.ru'
            required
          />
        </form>
        {controls}
      </main>
    </>
  );
}

export default Profile;
