import Header from '../Header/Header';

import { useState } from 'react';

import './Profile.css';

function Profile({ onEditProfile, onSignOut, userData, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);

  const [formValue, setFormValue] = useState({
    name: userData.name,
    email: userData.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditing)
      setFormValue({
        ...formValue,
        [name]: value,
      });
  };

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave(e) {
    onUpdateUser(e, formValue);
    setIsEditing(false);
  }

  let controls;

  if (isEditing) {
    controls = (
      <button className='profile__save-button' type='submit'>
        Сохранить
      </button>
    );
  } else {
    controls = (
      <>
        <button
          className='profile__edit-button'
          onClick={handleEdit}
          type='button'
        >
          Редактировать
        </button>
        <button
          className='profile__logout-button'
          onClick={onSignOut}
          type='button'
        >
          Выйти из аккаунта
        </button>
      </>
    );
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='profile'>
        <h1 className='profile__title'>Привет, {userData.name}!</h1>
        <form
          onSubmit={(e) => handleSave(e, formValue.name, formValue.email)}
          className='profile__form'
        >
          <div className='profile__input-container'>
            <label
              className='profile__label profile__label_no-1'
              htmlFor='name'
            >
              Имя
            </label>
            <input
              className='profile__input profile__input_no_1'
              type='text'
              id='name'
              name='name'
              value={formValue.name}
              onChange={handleChange}
              required
              placeholder='Имя'
              minLength='2'
              maxLength='20'
            />
          </div>
          <div className='profile__input-container'>
            <label
              className='profile__label profile__label_no-2'
              htmlFor='email'
            >
              E-mail
            </label>
            <input
              className='profile__input profile__input_no-2'
              type='email'
              id='email'
              name='email'
              value={formValue.email}
              onChange={handleChange}
              required
              placeholder='E-mail'
              minLength='8'
              maxLength='20'
            />
          </div>
          {controls}
        </form>
      </main>
    </>
  );
}

export default Profile;
