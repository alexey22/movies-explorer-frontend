import { useEffect } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import './SearchForm.css';
import searchicon from './search-icon.svg';
import { useState } from 'react';

function SearchForm({ searchQuery, setSearchQuery, isShort, setIsShort }) {
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

  function handleChangeSearchQuery(e) {
    const query = e.target.value;
    setSearchQuery(query);
  }

  return (
    <>
      <section className='search-form'>
        <form className='search-form__form'>
          <div className='search-form__container'>
            <img
              className='search-form__icon'
              src={searchicon}
              alt='Иконка поиска'
            />
            <input
              className='search-form__input'
              placeholder='Фильм'
              required
              value={searchQuery}
              onChange={handleChangeSearchQuery}
            />
            <button className='search-form__button'>Найти</button>

            {windowWidth > 700 ? (
              <>
                <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />
              </>
            ) : (
              ''
            )}
          </div>
          {windowWidth <= 700 ? (
            <>
              <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />
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
