import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import './SavedMovies.css';

import { useEffect, useState } from 'react';

import MainApi from '../../utils/MainApi';

import getFilteredMovies from '../../utils/getFilteredMovies';

function Movies({ savedMovies, setSavedMovies, movies }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [findedSavedMovies, setFindedSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (savedMovies === null) {
      setIsLoading(true);
      MainApi.getSavedMovies().then((movies) => {
        setSavedMovies(movies);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (savedMovies === null) {
      setFindedSavedMovies([]);
    } else
      setFindedSavedMovies(
        getFilteredMovies(savedMovies, searchQuery, isShort)
      );
  }, [isShort, savedMovies]);

  function handleSubmit(title) {
    setFindedSavedMovies(getFilteredMovies(savedMovies, title, isShort));
    setSearchQuery(title);
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='saved-movies'>
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isShort={isShort}
          setIsShort={setIsShort}
          onSubmit={handleSubmit}
        />
        {isLoading && <Preloader />}
        {findedSavedMovies.length === 0 && (
          <p className='saved-movies__not-found'>Ничего не найдено</p>
        )}
        <MoviesCardList
          savedMovies={findedSavedMovies}
          setSavedMovies={setSavedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
