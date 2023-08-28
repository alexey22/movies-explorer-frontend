import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__line'></div>
      <div className='footer__container'>
        <p className='footer__copyright'>© 2023</p>
        <div className='footer__links'>
          <a
            href='https://practicum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            href='https://github.com/alexey22'
            className='footer__link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
