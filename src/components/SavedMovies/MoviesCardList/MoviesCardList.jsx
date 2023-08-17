import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import { useState, useEffect } from 'react';

function MoviesCardList({ savedMovies }) {
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

  if (windowWidth > 768) {
    return (
      <section className='list-saved'>
        {savedMovies.map((movie) => (
          <MoviesCard {...movie} key={movie.id} />
        ))}
      </section>
    );
  } else if (windowWidth > 570) {
    return (
      <section className='list-saved'>
        {savedMovies.map((movie, index) => {
          if (index < 3) {
            return <MoviesCard {...movie} key={movie.id} />;
          } else {
            return '';
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='list-saved'>
        {savedMovies.map((movie, index) => {
          if (index < 2) {
            return <MoviesCard {...movie} key={movie.id} />;
          } else {
            return '';
          }
        })}
      </section>
    );
  }
}

export default MoviesCardList;
