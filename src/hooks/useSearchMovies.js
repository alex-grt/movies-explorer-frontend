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

    if (component === 'movies') {
      localStorage.setItem(`found-${component}`, JSON.stringify(results));
    } else {
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
          setIsSearchError(true);
        })
        .finally(() => setPreloaderVisible(false));
    } else {
      searchMovie(JSON.parse(localStorage.getItem(`${component}-from-server`)));
    }
  }

  const renderMovies = () => {
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

      if (component === 'movies') {
        localStorage.setItem(`found-${component}`, JSON.stringify(results));
      } else {
        setSavedMovies(results);
      }
    } else {
      getMovies();
    }
  }

  const toggleShort = () => {
    isShort ? setIsShort(false) : setIsShort(true);

    if (component === 'movies') {
      if (localStorage.getItem(`found-${component}`)) {
        const { query, list } = JSON.parse(localStorage.getItem(`found-${component}`));

        localStorage.setItem(`found-${component}`, JSON.stringify({
          query,
          short: !isShort,
          list
        }));
      } else {
        if (localStorage.getItem(`${component}-from-server`)) {
          const { query, list } = JSON.parse(localStorage.getItem(`${component}-from-server`));

          localStorage.setItem(`found-${component}`, JSON.stringify({
            query,
            short: !isShort,
            list
          }));
        }
      }
    }
  }

  return {
    query,
    setQuery,
    isShort,
    isSearchError,
    setIsSearchError,
    preloaderVisible,
    movies,
    renderMovies,
    toggleShort
  };
}
