import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  if (window.innerWidth > 768) {
    return (
      <div className='list'>
        {movies.map((movie) => (
          <MoviesCard {...movie} key={movie.id} />
        ))}
      </div>
    );
  } else if (window.innerWidth > 570) {
    return (
      <div className='list'>
        {movies.map((movie, index) => {
          if (index < 8) {
            return <MoviesCard {...movie} key={movie.id} />;
          } else {
            return '';
          }
        })}
      </div>
    );
  } else {
    return (
      <div className='list'>
        {movies.map((movie, index) => {
          if (index < 5) {
            return <MoviesCard {...movie} key={movie.id} />;
          } else {
            return '';
          }
        })}
      </div>
    );
  }
}

export default MoviesCardList;
