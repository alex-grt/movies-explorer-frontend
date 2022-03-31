import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Tooltip from '../Tooltip/Tooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RedirectedRoute from '../RedirectedRoute/RedirectedRoute';
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', id: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [isTooltipContent, setTooltipContent] = React.useState({ title: '', text: '' });
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem('found-saved-movies')) || {}
  );
  const [counterRender, setCounterRender] = React.useState({
    mobile: 5,
    desktop: 7
  });
  const [buttonTitle, setButtonTitle] = React.useState({
    edit: 'Редактировать'
  });
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi.getUserData(token)
        .then(user => {
          setCurrentUser({ name: user.name, email: user.email, id: user._id });
          setLoggedIn(true);
        })
        .catch(err => {
          if (err === 400) {
            setTooltipContent({
              title: err,
              text: 'При авторизации произошла ошибка. Переданный токен некорректен'
            });
          } else if (err === 401) {
            setTooltipContent({
              title: err,
              text: `При авторизации произошла ошибка.
                Токен не передан или передан не в том формате`
            });
          } else if (err === 404) {
            setTooltipContent({
              title: err,
              text: 'Страница по указанному маршруту не найдена'
            });
          } else {
            setTooltipContent({ title: err, text: 'На сервере произошла ошибка' });
          }
          setIsTooltipOpen(true);
          setLoggedIn(false);
        });
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then(list => {
          const mySavedMovies = list.filter(movie => movie.owner === currentUser.id);
          const results = {
            query: '',
            short: false,
            list: mySavedMovies
          };

          localStorage.setItem('saved-movies-from-server', JSON.stringify(results));
          if (JSON.parse(localStorage.getItem('found-saved-movies'))) {
            setSavedMovies(JSON.parse(localStorage.getItem('found-saved-movies')));
          } else {
            setSavedMovies(results);
          }
        })
        .catch(err => {
          setTooltipContent({
            title: err,
            text: 'Не удалось получить сохранённые фильмы'
          });
          setIsTooltipOpen(true);
        });
    }
  }, [loggedIn, currentUser]);

  React.useEffect(() => {
    if (
      isMenuOpen ||
      isTooltipOpen
      ) {
        const handleEscPress = (evt) => {
          if (evt.key === 'Escape') {
            closeAllPopups();
          }
        }

        document.addEventListener('keydown', handleEscPress);

        return () => document.removeEventListener('keydown', handleEscPress);
      }
  }, [
    isMenuOpen,
    isTooltipOpen
  ]);

  function onGetUserData(token) {
    mainApi.getUserData(token)
      .then((user) => {
        setCurrentUser({ name: user.name, email: user.email, id: user._id });
      })
      .catch(err => {
        console.log(`Не удалось получить данные о пользователе: ${err}`);
      });
  }

  function onLogin({email, password}) {
    mainApi.authorizationUser({email, password})
      .then((data) => {
        localStorage.setItem('token', data.token);
        onGetUserData(data.token);
        setLoggedIn(true);
      })
      .catch(err => {
        if (err === 401) {
          setTooltipContent({
            title: err,
            text: 'Вы ввели неправильный логин или пароль'
          });
        } else {
          setTooltipContent({ title: err, text: 'На сервере произошла ошибка' });
        }
        setIsTooltipOpen(true);
      });
  }

  function onRegister({ name, email, password }) {
    mainApi.registrationUser({ name, email, password })
      .then(() => {
        onLogin({ email, password });
      })
      .catch(err => {
        if (err === 400) {
          setTooltipContent({
            title: err,
            text: 'При регистрации пользователя произошла ошибка'
          });
        } else if (err === 409) {
          setTooltipContent({
            title: err,
            text: 'Пользователь с таким email уже существует'
          });
        } else {
          setTooltipContent({ title: err, text: 'На сервере произошла ошибка' });
        }
        setIsTooltipOpen(true);
      });
  }

  function onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies-from-server');
    localStorage.removeItem('saved-movies-from-server');
    localStorage.removeItem('found-movies');
    localStorage.removeItem('found-saved-movies');
    setSavedMovies({});
    setCounterRender({
      mobile: 5,
      desktop: 7
    });
    setLoggedIn(false);
  }

  function handleUserUpdate({ name, email }) {
    setButtonTitle({
      ...buttonTitle,
      edit: 'Редактирование...'
    });

    mainApi.setUserData({ name, email })
      .then(user => {
        setCurrentUser(state => ({
          ...state,
          name: user.name,
          email: user.email
        }));
        setTooltipContent({ title: 'OK', text: 'Профиль обновлён' });
        setIsTooltipOpen(true);
      })
      .catch(err => {
        if (err === 400) {
          setTooltipContent({
            title: err,
            text: 'При обновлении профиля произошла ошибка'
          });
        } else if (err === 409) {
          setTooltipContent({
            title: err,
            text: 'Пользователь с таким email уже существует'
          });
        } else if (err === 404) {
          setTooltipContent({
            title: err,
            text: 'Страница по указанному маршруту не найдена'
          });
        } else {
          setTooltipContent({ title: err, text: 'На сервере произошла ошибка' });
        }
        setIsTooltipOpen(true);
      })
      .finally(() => setButtonTitle({
        ...buttonTitle,
        edit: 'Редактировать'
      }));
  }

  function toggleLike(movie) {
    const savedMoviesFromServer = JSON.parse(
      localStorage.getItem('saved-movies-from-server')
    )?.list;
    const isLiked = savedMoviesFromServer.some(
      savedMovie => savedMovie.movieId === movie.movieId
    );

    if (isLiked) {
      const id = savedMoviesFromServer.find(
        savedMovie => savedMovie.movieId === movie.movieId
      )._id;

      mainApi.deleteMovie(id)
        .then(() => {
          setSavedMovies({
            query: '',
            short: false,
            list: savedMovies.list.filter(movie =>
              movie._id === id ? null : movie
            )
          });

          const result = savedMoviesFromServer.filter(movie => movie._id !== id);
          localStorage.setItem('saved-movies-from-server', JSON.stringify({
            query: '',
            short: false,
            list: result,
          }));
        })
        .catch(err => {
          setTooltipContent({ title: err, text: 'Не удалось снять лайк' });
          setIsTooltipOpen(true);
        });
    } else {
      mainApi.addMovie(movie)
        .then(newSavedMovie => {
          setSavedMovies({
            query: '',
            short: false,
            list: [newSavedMovie, ...savedMovies.list]
          });

          savedMoviesFromServer.unshift(newSavedMovie);
          localStorage.setItem('saved-movies-from-server', JSON.stringify({
            query: '',
            short: false,
            list: savedMoviesFromServer,
          }));
        })
        .catch(err => {
          setTooltipContent({ title: err, text: 'Не удалось поставить лайк' });
          setIsTooltipOpen(true);
        });
      }
  }

  function deleteMovie(id) {
    const savedMoviesFromServer = JSON.parse(
      localStorage.getItem('saved-movies-from-server')
    )?.list;

    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies({
          query: '',
          short: false,
          list: savedMovies.list.filter(movie =>
            movie._id === id ? null : movie
          )
        });

        const result = savedMoviesFromServer.filter(movie => movie._id !== id);
        localStorage.setItem('saved-movies-from-server', JSON.stringify({
          query: '',
          short: false,
          list: result,
        }));
      })
      .catch(err => {
        setTooltipContent({ title: err, text: 'Не удалось удалить фильм' });
        setIsTooltipOpen(true);
      });
  }

  function handleRenderButtonClick() {
    if (isMobile) {
      setCounterRender({
        ...counterRender,
        mobile: counterRender.mobile + 5
      });
    } else {
      setCounterRender({
        ...counterRender,
        desktop: counterRender.desktop + 7
      });
    }
  }

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function closeAllPopups() {
    setIsMenuOpen(false);
    setIsTooltipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={
            <>
              <Header
                loggedIn={loggedIn}
                isOpen={isMenuOpen}
                onMenuClick={handleMenuClick}
                onClose={closeAllPopups}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/movies" element={
            <>
              <Header
                loggedIn={loggedIn}
                isOpen={isMenuOpen}
                onMenuClick={handleMenuClick}
                onClose={closeAllPopups}
              />
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                counterRender={counterRender}
                setCounterRender={setCounterRender}
                isMobile={isMobile}
                handleRenderButtonClick={handleRenderButtonClick}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                toggleLike={toggleLike}
              />
              <Footer />
            </>
          }
        />
        <Route path="/saved-movies" element={
            <>
              <Header
                isOpen={isMenuOpen}
                onMenuClick={handleMenuClick}
                onClose={closeAllPopups}
              />
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
                setCounterRender={setCounterRender}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                deleteMovie={deleteMovie}
              />
              <Footer />
            </>
          }
        />
        <Route path="/profile" element={
            <>
              <Header
                isOpen={isMenuOpen}
                onMenuClick={handleMenuClick}
                onClose={closeAllPopups}
              />
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
                onUserUpdate={handleUserUpdate}
                onSignOut={onSignOut}
                buttonTitle={buttonTitle.edit}
              />
            </>
          }
        />
        <Route path="/signin" element={
            <RedirectedRoute
              component={Login}
              loggedIn={loggedIn}
              onLogin={onLogin}
            />
          }
        />
        <Route path="/signup" element={
            <RedirectedRoute
              component={Register}
              loggedIn={loggedIn}
              onRegister={onRegister}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Tooltip
        isOpen={isTooltipOpen}
        content={isTooltipContent}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
