import MainApi from '../../../utils/MainApi';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const { nameRU, image, duration, trailerLink, isSaved } = movie;

  const alt = `Кадр из фильма ${nameRU}`;

  function minuteToTime(min) {
    const hours = Math.floor(min / 60);
    return `${hours > 0 ? `${hours}ч` : ''} ${min % 60}м`;
  }

  function onSaveMovie() {
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
    });
  }

  return (
    <article className='card'>
      {isSaved ? (
        <button className='card__saved' type='button'></button>
      ) : (
        <button className='card__save' type='button' onClick={onSaveMovie}>
          Сохранить
        </button>
      )}

      <a
        className='card__link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <figure className='card__figure'>
          <img
            className='card__image'
            src={'https://api.nomoreparties.co' + image.url}
            alt={alt}
          />
          <figcaption className='card__text'>
            <h2 className='card__title'>{nameRU}</h2>
            <p className='card__duration'>{minuteToTime(duration)}</p>
          </figcaption>
        </figure>
      </a>
    </article>
  );
}

export default MoviesCard;
