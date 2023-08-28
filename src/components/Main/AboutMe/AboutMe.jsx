import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutMe.css';

import photo from '../../../images/about-me-photo.png';

function AboutMe() {
  return (
    <article className='about-me' id='section3'>
      <SectionHeader text='Студент' padding_top='110px' />
      <div className='about-me__container'>
        <div className='about-me__text'>
          <h3 className='about-me__name'>Алексей</h3>
          <p className='about-me__profession'>Фронтенд-разработчик</p>
          <p className='about-me__description'>
            Я родился и живу в Барнауле, закончил с отличием бакалавриат
            Прикладная Информатика АлтГУ.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/alexey22'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>

        <img className='about-me__photo' src={photo} alt='Фото Виталия'></img>
      </div>
    </article>
  );
}

export default AboutMe;
