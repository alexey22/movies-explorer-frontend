import './More.css';

function More({ onMoreClick, display }) {
  return (
    <section className='more'>
      <button
        className={
          display ? 'more__button' : 'more__button more__button_hidden'
        }
        type='button'
        onClick={onMoreClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default More;
