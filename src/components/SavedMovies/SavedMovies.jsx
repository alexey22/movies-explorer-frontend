import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import { useState, useEffect } from 'react';

import './SavedMovies.css';

function Movies() {
  const movies = [
    {
      id: 1,
      nameRU: '«Роллинг Стоунз» в изгнании',
      duration: 61,
      image:
        'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
      trailerLink: 'https://www.ya.ru',
      isSaved: true,
    },
    {
      id: 2,
      nameRU: "All Tomorrow's Parties",
      duration: 82,
      image:
        'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 3,
      nameRU: ' Без обратного пути',
      duration: 104,
      image: 'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 4,
      nameRU: '«Роллинг Стоунз» в изгнании',
      duration: 61,
      image:
        'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 5,
      nameRU: "All Tomorrow's Parties",
      duration: 82,
      image:
        'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 6,
      nameRU: ' Без обратного пути',
      duration: 104,
      image: 'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 7,
      nameRU: '«Роллинг Стоунз» в изгнании',
      duration: 61,
      image:
        'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 8,
      nameRU: "All Tomorrow's Parties",
      duration: 82,
      image:
        'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 9,
      nameRU: ' Без обратного пути',
      duration: 104,
      image: 'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 10,
      nameRU: '«Роллинг Стоунз» в изгнании',
      duration: 61,
      image:
        'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 11,
      nameRU: "All Tomorrow's Parties",
      duration: 82,
      image:
        'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
    {
      id: 12,
      nameRU: ' Без обратного пути',
      duration: 104,
      image: 'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
      trailerLink: 'https://www.ya.ru',
    },
  ];

  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </>
  );
}

export default Movies;
