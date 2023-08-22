import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import './SavedMovies.css';

import { useEffect, useState } from 'react';

import MainApi from '../../utils/MainApi';

function Movies({ savedMovies, setSavedMovies }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [findedSavedMovies, setFindedSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFindedSavedMovies(
      savedMovies.filter(
        (movie) =>
          (!isShort || movie.duration < 40) &&
          (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [isShort, savedMovies]);

  useEffect(() => {
    if (localStorage.savedSearchQuery !== undefined)
      setSearchQuery(localStorage.savedSearchQuery);

    if (localStorage.isShortSaved === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }

    setIsLoading(true);
    MainApi.getSavedMovies().then((movies) => {
      setSavedMovies(movies);
      setIsLoading(false);
      setFindedSavedMovies(
        movies.filter(
          (movie) =>
            (!isShort || movie.duration < 40) &&
            (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
    });
  }, []);

  function handleSubmit() {
    const _findedMovies = savedMovies.filter(
      (movie) =>
        (!isShort || movie.duration < 40) &&
        (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFindedSavedMovies(_findedMovies);

    localStorage.setItem('savedSearchQuery', searchQuery);
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
