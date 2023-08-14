import './NavTab.css';

function NavTab() {
  return (
    <nav className='navtab'>
      <a className='navtab__link' href='#section1'>
        О проекте
      </a>
      <a className='navtab__link' href='#section2'>
        Технологии
      </a>
      <a className='navtab__link' href='#section3'>
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
