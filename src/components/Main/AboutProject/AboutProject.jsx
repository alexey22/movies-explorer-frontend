import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionHeader text='О проекте' padding_top='110px' />
      <div className='about-project__description'>
        <h3 className='about-project__h3'>Дипломный проект влючал 5 этапов</h3>
        <h3 className='about-project__h3'>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className='about-project__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>

        <p className='about-project__text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className='about-project__progress-bar'>
        <div className='about-project__progress-bar_part_one'>1 неделя</div>
        <div className='about-project__progress-bar_part_two'>4 недели</div>
        <div className='about-project__progress-bar_part_one-caption'>
          Back-end
        </div>
        <div className='about-project__progress-bar_part_two-caption'>
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
