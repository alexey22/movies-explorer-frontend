import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import { useState, useEffect } from 'react';

function MoviesCardList({ movies }) {
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
      <section className='list'>
        {movies.map((movie) => (
          <MoviesCard {...movie} key={movie.id} />
        ))}
      </section>
    );
  } else if (windowWidth > 570) {
    return (
      <section className='list'>
        {movies.map((movie, index) => {
          if (index < 8) {
            return <MoviesCard {...movie} key={movie.id} />;
          } else {
            return '';
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='list'>
        {movies.map((movie, index) => {
          if (index < 5) {
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
