import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
  const { pathname } = useLocation();

  function handlePopupClose(evt) {
    if (evt.target.classList.contains('navigation-overlay_opened')) {
      props.onClose();
    }
  }

  return (
    <>
      <div
        className={`navigation-overlay${
          props.isOpen ? ' navigation-overlay_opened' : ''
          }`}
          onClick={handlePopupClose}
      />
      <nav
        className={`navigation${props.isOpen ? ' navigation_opened' : ''}`}
        aria-label="панель навигации"
      >
        <button
          className="navigation__button-close"
          type="button"
          aria-label="кнопка Закрыть"
          onClick={props.onClose}
        ></button>
        <div className="navigation__cover">
          <Link
            to="/"
            className={`navigation__link navigation__link_different_hiding${
              pathname === '/' ? ' navigation__link_different_marked' : ''
            }`}
            onClick={props.onClose}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={`navigation__link${
              pathname === '/movies' ? ' navigation__link_different_marked' : ''
            }`}
            onClick={props.onClose}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`navigation__link${
              pathname === '/saved-movies' ? ' navigation__link_different_marked' : ''
            }`}
            onClick={props.onClose}
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          to="/profile"
          className="navigation__account-link"
          onClick={props.onClose}
        >
          <div className="navigation__account-icon" />
          <p className="navigation__account-text">Аккаунт</p>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
