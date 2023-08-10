import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutMe.css';

import photo from './about-me-photo.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <SectionHeader text='Студент' padding_top='110px' />
      <div className='about-me__container'>
        <h3 className='about-me__name'>Виталий</h3>
        <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__description'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <img className='about-me__photo' src={photo} alt='Фото Виталия'></img>
        <a className='about-me__link' href='https://github.com/alexey22'>
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
