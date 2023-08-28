import './NavTab.css';

function NavTab() {
  return (
    <nav className='navtab'>
      <div className='navtab__container'>
        <a className='navtab__link' href='#section1'>
          О проекте
        </a>
        <a className='navtab__link' href='#section2'>
          Технологии
        </a>
        <a className='navtab__link' href='#section3'>
          Студент
        </a>
      </div>
    </nav>
  );
}

export default NavTab;
