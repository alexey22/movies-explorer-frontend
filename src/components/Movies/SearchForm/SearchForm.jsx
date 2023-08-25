import { useEffect } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import './SearchForm.css';
import searchicon from './search-icon.svg';
import { useState } from 'react';

function SearchForm({ isShort, setIsShort, onSubmit, searchQuery }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [movieTitle, setMovieTitle] = useState(searchQuery);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    setMovieTitle(searchQuery);
  }, [searchQuery]);

  function handleChageMovieTitle(e) {
    const query = e.target.value;
    setMovieTitle(query);
  }

  return (
    <>
      <section className='search-form'>
        <form
          className='search-form__form'
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(movieTitle);
          }}
        >
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
              value={movieTitle}
              onChange={handleChageMovieTitle}
            />
            <button className='search-form__button' type='submit'>
              Найти
            </button>

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
