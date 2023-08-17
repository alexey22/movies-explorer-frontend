import MainApi from '../../../utils/MainApi';

import './MoviesCard.css';

function MoviesCard({ nameRU, image, duration, trailerLink, isSaved, _id }) {
  const alt = `Кадр из фильма ${nameRU}`;

  function minuteToTime(min) {
    const hours = Math.floor(min / 60);
    return `${hours > 0 ? `${hours}ч` : ''} ${min % 60}м`;
  }

  function handleDeleteCard() {
    MainApi.deleteMovie(_id);
  }

  return (
    <article className='card'>
      <button
        onClick={handleDeleteCard}
        className='card__delete'
        type='button'
      />
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
