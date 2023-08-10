import Project from './Project/Project';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Порфолио</h2>
      <Project title='Статичный сайт' link='https://www.ya.ru' />
      <div className='portfolio__line'></div>
      <Project title='Адаптивный сайт' link='https://www.ya.ru' />
      <div className='portfolio__line'></div>
      <Project title='Одностраничное приложение' link='https://www.ya.ru' />
    </section>
  );
}

export default Portfolio;
