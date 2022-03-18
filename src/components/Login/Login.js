import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__cover">
        <img className="login__logo" src={logo} alt="логотип сайта" />
        <h2 className="login__title">Рады видеть!</h2>
        <form
          className="login__form"
          name="login"
        >
          <div className="login__inputs">
            <div className="login__cover-input">
              <label className="login__label" htmlFor="login-email">E-mail</label>
              <input
                className="login__input"
                name="login-email"
                id="login-email"
                type="email"
                required
              />
              <span
                className="login__error"
                id="login-email-error"
              >
                Что-то пошло не так...
              </span>
            </div>
            <div className="login__cover-input">
              <label className="login__label" htmlFor="login-pswd">Пароль</label>
              <input
                className="login__input"
                name="login-pswd"
                id="login-pswd"
                type="password"
                minLength="6"
                maxLength="20"
                required
              />
              <span
                className="login__error"
                id="login-pswd-error"
              >
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <button
            className="login__button-submit"
            type="submit"
            aria-label="кнопка Войти"
          >
            Войти
          </button>
        </form>
        <p className="login__text">Ещё не зарегистрированы?&nbsp;
          <Link
            to="/signup"
            className="login__text login__link"
          >
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
