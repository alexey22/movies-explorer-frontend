import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import './SavedMovies.css';

import { useEffect } from 'react';

import MainApi from '../../utils/MainApi';

function Movies({ savedMovies, setSavedMovies }) {
  useEffect(() => {
    MainApi.getSavedMovies().then((movies) => {
      setSavedMovies(movies);
    });
  }, []);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList savedMovies={savedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
