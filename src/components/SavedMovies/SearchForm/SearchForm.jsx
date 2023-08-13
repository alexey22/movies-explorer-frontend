import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import './SearchForm.css';
import searchicon from './search-icon.svg';

function SearchForm() {
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

            {window.innerWidth > 700 ? (
              <>
                <FilterCheckbox />
              </>
            ) : (
              ''
            )}
          </div>
          {window.innerWidth <= 700 ? (
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
