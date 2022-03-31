import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { pathname } = useLocation();

  return (
    <header
      className={`header${
        pathname === '/' ? '' : ' header_theme_dark'
      }`}
    >
      <Link
        to="/"
        className="header__logo-link"
      >
        <img className="header__logo" src={logo} alt="логотип сайта" />
      </Link>
      { !props.loggedIn && pathname === '/' ?
        <div className="header__cover">
          <Link
            to="/signup"
            className="header__link"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__button"
          >
            <p className="header__button-text">Войти</p>
          </Link>
        </div>
      :
        <>
          <Navigation
            isOpen={props.isOpen}
            onClose={props.onClose}
          />
          <button
            className="header__button-menu"
            type="button"
            aria-label="кнопка Меню"
            onClick={props.onMenuClick}
          >
            <div className="header__menu-line" />
            <div className="header__menu-line" />
          </button>
        </>
      }
    </header>
  );
}

export default Header;
