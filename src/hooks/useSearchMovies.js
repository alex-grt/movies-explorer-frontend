import React from 'react';
import moviesApi from '../utils/MoviesApi';

export function useSearchMovies(
  component,
  setSavedMovies,
  setCounterRender
) {
  const [query, setQuery] = React.useState(
    JSON.parse(localStorage.getItem(`found-${component}`))?.query || ''
  );
  const [isShort, setIsShort] = React.useState(
    JSON.parse(localStorage.getItem(`found-${component}`))?.short || false
  );
  const [isSearchStatus, setIsSearchStatus] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [preloaderVisible, setPreloaderVisible] = React.useState(false);
  const moviesFromServer = JSON.parse(
    localStorage.getItem('movies-from-server')
  );
  const movies = JSON.parse(localStorage.getItem('found-movies'));

  const searchMovie = (data) => {
    const movieList = data.list.filter((item) =>
      (item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      item.nameEN?.toLowerCase().includes(query.toLowerCase()))
    );

    const results = {
      query,
      short: isShort,
      list: movieList
    };

    setIsSearchStatus(true);
    localStorage.setItem(`found-${component}`, JSON.stringify(results));
    if (component === 'saved-movies') {
      setSavedMovies(results);
    }
  }

  const getMovies = () => {
    if (!moviesFromServer && component === 'movies') {
      setPreloaderVisible(true);

      moviesApi.getMovies()
        .then(list => {
          const results = {
            query,
            short: isShort,
            list: list
          };

          localStorage.setItem('movies-from-server', JSON.stringify(results));
          searchMovie(results);
        })
        .catch(() => {
          setIsSearchStatus(false);
          setIsSearchError(true);
        })
        .finally(() => setPreloaderVisible(false));
    } else {
      searchMovie(JSON.parse(localStorage.getItem(`${component}-from-server`)));
    }
  }

  const renderMovies = () => {
    setIsSearchStatus(false);
    setIsSearchError(false);
    setCounterRender({
      mobile: 5,
      desktop: 7
    });

    if (!query) {
      const results = {
        query,
        short: isShort,
        list: JSON.parse(localStorage.getItem(`${component}-from-server`))?.list || []
      };

      setIsSearchStatus(false);
      localStorage.setItem(`found-${component}`, JSON.stringify(results));
      if (component === 'saved-movies') {
        setSavedMovies(results);
      }
    } else {
      getMovies();
    }
  }

  const toggleShort = () => {
    isShort ? setIsShort(false) : setIsShort(true);
  }

  return {
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
  };
}
