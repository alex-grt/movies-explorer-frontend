import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const { pathname } = useLocation();

  return (
    <li className="movie">
      <div className="movie__cover">
        <div className="movie__description">
          <h3 className="movie__title">
            {props.title}
          </h3>
          <p className="movie__duration">
            {props.duration}
          </p>
        </div>
        { pathname === '/saved-movies' ?
          <button
            className="movie__button-delete"
            type="button"
            aria-label="кнопка удаления"
          ></button>
        :
          <button
            className="movie__button-like movie__button-like_active"
            type="button"
            aria-label="кнопка Лайк"
          ></button>
        }
      </div>
      <img
        className="movie__image"
        src={props.link}
        alt={`обложка ${props.title}`}
      />
    </li>
  );
}

export default MoviesCard;
