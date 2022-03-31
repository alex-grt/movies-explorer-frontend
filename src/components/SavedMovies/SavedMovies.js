import './SavedMovies.css';
import React from 'react';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
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
    'saved-movies',
    props.setSavedMovies,
    props.setCounterRender
  );

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
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
      />
      <div className="plug" />
    </main>
  );
}

export default SavedMovies;
