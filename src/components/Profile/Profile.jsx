import Header from '../Header/Header';

import { useState, useEffect } from 'react';

import './Profile.css';

import validate from '../../utils/validate';

function Profile({
  onSignOut,
  userData,
  onUpdateUser,
  profileError,
  setProfileError,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [formValue, setFormValue] = useState({
    name: userData.name,
    email: userData.email,
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
  });

  useEffect(() => setProfileError(), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditing)
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
  };

  function handleEdit() {
    setIsEditing(true);
    setProfileError();
  }

  function handleSave(e) {
    onUpdateUser(e, formValue);
    setIsEditing(false);
  }

  let controls;

  if (isEditing) {
    controls = (
      <button
        disabled={
          !(isValid.name && isValid.email) ||
          (formValue.name === userData.name &&
            formValue.email === userData.email)
        }
        className={
          isValid.name &&
          isValid.email &&
          !(
            formValue.name === userData.name &&
            formValue.email === userData.email
          )
            ? 'profile__save-button'
            : 'profile__save-button profile__save-button_disabled'
        }
        type='submit'
      >
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
              disabled={!isEditing}
              className={
                isValid.name
                  ? 'profile__input profile__input_no_1'
                  : 'profile__input profile__input_no_1 profile__input_type_error'
              }
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
              disabled={!isEditing}
              className={
                isValid.email
                  ? 'profile__input profile__input_no_2'
                  : 'profile__input profile__input_no_2 profile__input_type_error'
              }
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
          <span className='profile__error'>{profileError}</span>
          {controls}
        </form>
      </main>
    </>
  );
}

export default Profile;
