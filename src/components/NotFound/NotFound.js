import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__cover">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button
        className="not-found__button-back"
        type="button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;
