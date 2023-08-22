import './MoviesCard.css';

function MoviesCard({ movie, isSaved, onSaveMovie, onDeleteSavedMovie }) {
  const { nameRU, image, duration, trailerLink } = movie;

  const alt = `Кадр из фильма ${nameRU}`;

  function minuteToTime(min) {
    const hours = Math.floor(min / 60);
    return `${hours > 0 ? `${hours}ч` : ''} ${min % 60}м`;
  }

  return (
    <article className='card'>
      {isSaved ? (
        <button
          className='card__saved'
          type='button'
          onClick={() => onDeleteSavedMovie(movie.id)}
        />
      ) : (
        <button
          className='card__save'
          type='button'
          onClick={() => onSaveMovie(movie)}
        >
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
