import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import Preloader from '../Preloader/Preloader';

import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';

import './Movies.css';

import { useEffect, useState } from 'react';

function Movies({ movies, setMovies, savedMovies, setSavedMovies }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [findedMovies, setFindedMovies] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [displayCount, setDisplayCount] = useState(
    windowWidth > 1010 ? 12 : windowWidth > 629 ? 8 : 5
  );

  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    setFindedMovies(movies.filter((movie) => !isShort || movie.duration < 40));
  }, [isShort, movies]);

  useEffect(() => {
    setFindedMovies([]);
    if (localStorage.isShort === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }

    if (localStorage.movies !== undefined)
      setMovies(JSON.parse(localStorage.movies));
    if (localStorage.searchQuery !== undefined)
      setSearchQuery(localStorage.searchQuery);
    if (localStorage.findedMovies !== undefined)
      setFindedMovies(JSON.parse(localStorage.findedMovies));
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setDisplayCount(
        window.innerWidth > 1010
          ? Math.max(12, displayCount)
          : window.innerWidth > 629
          ? Math.max(8, displayCount)
          : Math.max(5, displayCount)
      );
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  function handleMoreClick() {
    setDisplayCount(displayCount + (window.innerWidth > 1010 ? 3 : 2));
  }

  function handleSubmit() {
    setDisplayCount(
      window.innerWidth > 1010 ? 12 : window.innerWidth > 629 ? 8 : 5
    );

    setMovies([]);
    setFindedMovies([]);

    setIsLoading(true);

    localStorage.setItem('searchQuery', searchQuery);

    MoviesApi.getMovies().then((loadMovies) => {
      const _movies = loadMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setMovies(_movies);
      localStorage.setItem('movies', JSON.stringify(_movies));

      const _findedMovies = loadMovies.filter(
        (movie) =>
          (!isShort || movie.duration < 40) &&
          (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFindedMovies(_findedMovies);
      localStorage.setItem('findedMovies', JSON.stringify(_findedMovies));

      setIsLoading(false);

      setIsSend(true);
    });

    MainApi.getSavedMovies().then((movies) => {
      setSavedMovies(movies);
    });
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isShort={isShort}
          setIsShort={setIsShort}
          onSubmit={handleSubmit}
        />
        {isLoading && <Preloader />}

        {findedMovies.length === 0 && !isLoading && isSend && (
          <p className='movies__not-found'>Ничего не найдено</p>
        )}

        {findedMovies.length !== 0 && (
          <MoviesCardList
            movies={findedMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            displayCount={displayCount}
          />
        )}

        <More
          onMoreClick={handleMoreClick}
          display={findedMovies.length > displayCount}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
