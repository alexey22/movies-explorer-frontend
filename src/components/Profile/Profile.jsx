import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <label className='profile__label profile__label_no_1' htmlFor='name'>
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
        <label className='profile__label profile__label_no_2' htmlFor='email'>
          E-mail
        </label>
        <input
          className='profile__input profile__input_no_2'
          type='email'
          id='email'
          value='pochta@yandex.ru'
          required
        />
      </form>
      <button className='profile__edit-button'>Редактировать</button>
      <button className='profile__logout-button'>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
