import './Movies.css';
import React from 'react';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { NOT_SHORT_FILM } from '../../utils/constants';

function Movies(props) {
  const {
    query,
    setQuery,
    isShort,
    isSearchError,
    setIsSearchError,
    preloaderVisible,
    movies,
    renderMovies,
    toggleShort
  } = useSearchMovies('movies', props.setSavedMovies, props.setCounterRender);
  const counterRender = props.isMobile
    ? props.counterRender.mobile
    : props.counterRender.desktop;
  const moviesToDisplay = movies?.list.filter(
    (movie) => !isShort || movie.duration < NOT_SHORT_FILM
  );

  React.useEffect(() => {
    if (!props.loggedIn) {
      setIsSearchError(false);
    }
  }, [props.loggedIn, setIsSearchError]);

  return (
    <main>
      <SearchForm
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        toggleShort={toggleShort}
        renderMovies={renderMovies}
      />
      <MoviesCardList
        movies={movies}
        preloaderVisible={preloaderVisible}
        searchError={isSearchError}
        isShort={isShort}
        counterRender={props.counterRender}
        isMobile={props.isMobile}
        savedMovies={props.savedMovies}
        allSavedMovies={props.allSavedMovies}
        toggleLike={props.toggleLike}
      />
      <div className="render-button">
        <button
          className={`render-button__button${
            moviesToDisplay?.length > 0 && moviesToDisplay?.length >= counterRender
              ? ' render-button__button_visible'
              : ''
          }`}
          type="button"
          onClick={props.handleRenderButtonClick}
        >
          Ещё
        </button>
      </div>
    </main>
  );
}

export default Movies;
