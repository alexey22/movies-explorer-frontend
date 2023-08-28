import Project from './Project/Project';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <Project
          title='Статичный сайт'
          link='https://github.com/alexey22/how-to-learn'
          bottomLine={true}
        />
        <Project
          title='Адаптивный сайт'
          link='https://github.com/alexey22/russian-travel'
          bottomLine={true}
        />
        <Project
          title='Одностраничное приложение'
          link='https://github.com/alexey22/react-mesto-api-full-gha'
          bottomLine={false}
        />
      </ul>
    </section>
  );
}

export default Portfolio;
