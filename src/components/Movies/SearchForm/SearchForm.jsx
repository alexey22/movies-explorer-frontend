import { useEffect } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import './SearchForm.css';
import searchicon from './search-icon.svg';
import { useState } from 'react';

function SearchForm() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      <section className='search-form'>
        <form className='search-form__form'>
          <div className='search-form__container'>
            <img
              className='search-form__icon'
              src={searchicon}
              alt='search icon'
            />
            <input className='search-form__input' placeholder='Фильм' />
            <button className='search-form__button'>Найти</button>

            {windowWidth > 700 ? (
              <>
                <FilterCheckbox />
              </>
            ) : (
              ''
            )}
          </div>
          {windowWidth <= 700 ? (
            <>
              <FilterCheckbox />
            </>
          ) : (
            ''
          )}
        </form>
        <div className='search-form__line'></div>
      </section>
    </>
  );
}

export default SearchForm;
