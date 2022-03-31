import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const { pathname } = useLocation();

  return (
    <section className="movies">
      <Preloader preloaderVisible={props.preloaderVisible} />
      {pathname === '/saved-movies' ? (
        <p className={`movies__text${
            props.savedMovies?.list.length === 0 && props.searchStatus
              ? ' movies__text_visible'
              : ''
          }`}
        >
          Ничего не найдено
        </p>
      ) : (
        <p className={`movies__text${
            props.movies?.list.length === 0 && props.searchStatus
              ? ' movies__text_visible'
              : ''
          }`}
        >
          Ничего не найдено
        </p>
      )}
      <p className={`movies__text${
          props.searchError ? ' movies__text_visible' : ''
        }`}
      >
        Во время запроса произошла ошибка. Возможно, проблема с
        соединением или сервер недоступен. Подождите немного
        и попробуйте ещё раз
      </p>
      <ul className="movies__list undecorated-list">
        {pathname === '/saved-movies'
          ? props.savedMovies?.list
              .filter((movie) => !props.isShort || movie.duration < 41)
              .map((savedMovie) => (
                <MoviesCard
                  key={savedMovie._id}
                  savedMovie={savedMovie}
                  deleteMovie={props.deleteMovie}
                />
            ))
          : props.movies?.list
              .filter((movie) => !props.isShort || movie.duration < 41)
              .slice(
                0,
                props.isMobile
                  ? props.counterRender.mobile
                  : props.counterRender.desktop
              )
              .map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  savedMovies={props.savedMovies}
                  toggleLike={props.toggleLike}
                />
              ))
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;
