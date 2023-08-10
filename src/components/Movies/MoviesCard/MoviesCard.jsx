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
        <button className='card__saved'></button>
      ) : (
        <button className='card__save'>Сохранить</button>
      )}

      <a className='card__link' href={trailerLink}>
        <figure className='card__figure'>
          <img className='card__image' src={image} alt={alt} />
          <figcaption className='card__text'>
            <h1 className='card__title'>{nameRU}</h1>
            <p className='card__duration'>{minuteToTime(duration)}</p>
          </figcaption>
        </figure>
      </a>
    </article>
  );
}

export default MoviesCard;
