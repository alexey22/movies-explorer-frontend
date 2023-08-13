import './NotFound.css';

import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <span className='not-found__text'>Страница не найдена</span>
      <button className='not-found__button' onClick={handleGoBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
