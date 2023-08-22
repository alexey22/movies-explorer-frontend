import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import { useState, useEffect } from 'react';

import MainApi from '../../../utils/MainApi';

function MoviesCardList({ movies, savedMovies, setSavedMovies, displayCount }) {
  function handleSaveMovie(movie) {
    MainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }).then((savedMovie) => setSavedMovies([...savedMovies, savedMovie]));
  }

  function handleDeleteSavedMovie(id) {
    const movieForDelete = savedMovies.find(
      (savedMovie) => (savedMovie.movieId = id)
    );
    const movieForDeleteId = movieForDelete._id;

    MainApi.deleteMovie(movieForDeleteId).then((deletedMovieInfo) => {
      if (deletedMovieInfo.deletedCount === 1) {
        setSavedMovies(
          savedMovies.filter(
            (savedMovie) => savedMovie._id !== movieForDeleteId
          )
        );
      }
    });
  }

  return (
    <section className='list'>
      {movies.map((movie, index) => {
        if (index < displayCount) {
          return (
            <MoviesCard
              movie={movie}
              key={movie.id}
              isSaved={savedMovies.some(
                (savedMovie) => savedMovie.movieId === movie.id
              )}
              onSaveMovie={handleSaveMovie}
              onDeleteSavedMovie={handleDeleteSavedMovie}
            />
          );
        } else {
          return '';
        }
      })}
    </section>
  );
}

export default MoviesCardList;
