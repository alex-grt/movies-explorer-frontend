import './Movies.css';
import React from 'react';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  const {
    query,
    setQuery,
    isShort,
    isSearchStatus,
    setIsSearchStatus,
    isSearchError,
    setIsSearchError,
    preloaderVisible,
    movies,
    renderMovies,
    toggleShort
  } = useSearchMovies(
    'movies',
    props.setSavedMovies,
    props.setCounterRender,
  );
  const counterRender = props.isMobile
    ? props.counterRender.mobile
    : props.counterRender.desktop;

  React.useEffect(() => {
    if (!props.loggedIn) {
      setIsSearchStatus(false);
      setIsSearchError(false);
    }
  }, [props.loggedIn, setIsSearchStatus, setIsSearchError]);

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
        searchStatus={isSearchStatus}
        searchError={isSearchError}
        isShort={isShort}
        counterRender={props.counterRender}
        isMobile={props.isMobile}
        savedMovies={props.savedMovies}
        toggleLike={props.toggleLike}
      />
      <div className="render-button">
        <button
          className={`render-button__button${
            movies?.list.length > 0 && movies?.list.length >= counterRender
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
