import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';

import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';

import './Movies.css';

import { useEffect, useState } from 'react';

function Movies({ movies, setMovies, savedMovies, setSavedMovies }) {
  // const movies = [
  //   {
  //     id: 1,
  //     nameRU: '«Роллинг Стоунз» в полном изгнании',
  //     duration: 61,
  //     image:
  //       'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
  //     trailerLink: 'https://www.ya.ru',
  //     isSaved: true,
  //   },
  // ];

  useEffect(() => {
    MoviesApi.getMovies().then((movies) => {
      setMovies(movies);
    });

    MainApi.getSavedMovies().then((movies) => {
      setSavedMovies(movies);
    });
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [isShort, setIsShort] = useState(false);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isShort={isShort}
          setIsShort={setIsShort}
        />
        <MoviesCardList
          movies={movies.filter(
            (movie) =>
              (!isShort || movie.duration < 40) &&
              (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
          )}
          savedMovies={savedMovies}
        />
        <More />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
