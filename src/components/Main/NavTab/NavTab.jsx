import { Link } from 'react-router-dom';

import './NavTab.css';

function NavTab() {
  return (
    <section className='navtab'>
      <a className='navtab__link' href='#section1'>
        О проекте
      </a>
      <a className='navtab__link' href='#section2'>
        Технологии
      </a>
      <a className='navtab__link' href='#section3'>
        Студент
      </a>
    </section>
  );
}

export default NavTab;
