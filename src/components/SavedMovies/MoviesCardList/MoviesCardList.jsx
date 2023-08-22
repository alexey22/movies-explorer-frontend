import MainApi from '../../../utils/MainApi';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ savedMovies, setSavedMovies }) {
  function handleDeleteSavedMovie(_id) {
    MainApi.deleteMovie(_id).then((deletedMovieInfo) => {
      if (deletedMovieInfo.deletedCount === 1) {
        setSavedMovies(
          savedMovies.filter((savedMovie) => savedMovie._id !== _id)
        );
      }
    });
  }

  return (
    <section className='list-saved'>
      {savedMovies.map((movie) => (
        <MoviesCard
          {...movie}
          key={movie.movieId}
          onDeleteSavedMovie={handleDeleteSavedMovie}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
