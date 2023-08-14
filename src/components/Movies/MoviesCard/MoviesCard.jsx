import './MoviesCard.css';

function MoviesCard({ nameRU, image, duration, trailerLink, isSaved }) {
  const alt = `Кадр из фильма ${nameRU}`;

  function minuteToTime(min) {
    const hours = Math.floor(min / 60);
    return `${hours > 0 ? `${hours}ч` : ''} ${min % 60}м`;
  }

  return (
    <article className='card'>
      {isSaved ? (
        <button className='card__saved' type='button'></button>
      ) : (
        <button className='card__save' type='button'>
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
          <img className='card__image' src={image} alt={alt} />
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
