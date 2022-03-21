import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <>
      <div
        className={`navigation-overlay${
          props.isOpen ? ' navigation-overlay_opened' : ''
          }`}
      />
      <nav
        className={`navigation${props.isOpen ? ' navigation_opened' : ''}`}
        aria-label="панель навигации"
      >
        <button
          className="navigation__button-close"
          type="button"
          aria-label="кнопка Закрыть"
        ></button>
        <div className="navigation__cover">
          <Link
            to="/"
            className="navigation__link navigation__link_different_hiding"
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className="navigation__link navigation__link_different_marked"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="navigation__link"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          to="/profile"
          className="navigation__account-link"
        >
          <div className="navigation__account-icon" />
          <p className="navigation__account-text">Аккаунт</p>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
