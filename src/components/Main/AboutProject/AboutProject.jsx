import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutProject.css';

function AboutProject() {
  return (
    <article className='about-project' id='section1'>
      <SectionHeader text='О проекте' />
      <div className='about-project__description'>
        <article>
          <h3 className='about-project__h3'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__h3'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>

      <div className='about-project__progress-bar'>
        <div className='about-project__part-one'>1 неделя</div>
        <div className='about-project__part-two'>4 недели</div>
        <div className='about-project__part-one-caption'>Back-end</div>
        <div className='about-project__part-two-caption'>Front-end</div>
      </div>
    </article>
  );
}

export default AboutProject;
