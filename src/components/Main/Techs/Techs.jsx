import SectionHeader from '../SectionHeader/SectionHeader';
import Tech from './Tech/Tech';

import './Techs.css';

function Techs() {
  return (
    <article className='techs' id='section2'>
      <div className='techs__container'>
        <SectionHeader text='Технологии' padding_top='100px' />
        <h3 className='techs__header'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          <Tech text='HTML' />
          <Tech text='CSS' />
          <Tech text='JS' />
          <Tech text='React' />
          <Tech text='Git' />
          <Tech text='Express.js' />
          <Tech text='mongoDB' />
        </ul>
      </div>
    </article>
  );
}

export default Techs;
