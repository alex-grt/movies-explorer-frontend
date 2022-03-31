import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const { pathname } = useLocation();
  const isLiked = props.savedMovies?.list?.some(
    savedMovie => savedMovie.movieId === props.movie.id
  );
  const duration =
    pathname === '/saved-movies'
      ? Math.floor(props.savedMovie.duration / 60) +
        'ч ' +
        props.savedMovie.duration % 60 +
        'м'
      : Math.floor(props.movie.duration / 60) +
        'ч ' +
        props.movie.duration % 60 +
        'м';

  function handleDeleteMovie() {
    props.deleteMovie(props.savedMovie._id);
  }

  function handleLikeClick() {
    props.toggleLike({
      movieId: props.movie.id,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      country: props.movie.country,
      director: props.movie.director,
      duration: props.movie.duration,
      year: props.movie.year,
      description: props.movie.description,
      image: `https://api.nomoreparties.co${props.movie.image.url}`,
      trailerLink: props.movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${props.movie.image.url}`,
    });
  }

  return (
    <li className="movie">
      <div className="movie__cover">
        <div className="movie__description">
          <h3 className="movie__title">
            {pathname === '/saved-movies'
              ? props.savedMovie.nameRU
              : props.movie.nameRU}
          </h3>
          <p className="movie__duration">{duration}</p>
        </div>
        {pathname === '/saved-movies' ?
          <button
            className="movie__button-delete"
            type="button"
            aria-label="кнопка удаления"
            onClick={handleDeleteMovie}
          ></button>
        :
          <button
            className={`movie__button-like${
              isLiked ? ' movie__button-like_active' : ''
            }`}
            type="button"
            aria-label="кнопка Лайк"
            onClick={handleLikeClick}
          ></button>
        }
      </div>
      <a
        href={
          pathname === '/saved-movies'
            ? props.savedMovie.trailerLink
            : props.movie.trailerLink
        }
        className="movie__trailer"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__image"
          src={
            pathname === '/saved-movies'
              ? props.savedMovie.image
              : `https://api.nomoreparties.co${props.movie.image.url}`
          }
          alt={`обложка ${
            pathname === '/saved-movies'
              ? props.savedMovie.nameRU
              : props.movie.nameRU
          }`}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
