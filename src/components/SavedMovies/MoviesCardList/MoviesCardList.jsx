import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <div className='list'>
      {movies.map((movie) => (
        <MoviesCard {...movie} />
      ))}
    </div>
  );
}

export default MoviesCardList;
