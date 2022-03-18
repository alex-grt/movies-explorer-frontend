import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__cover">
        <img className="register__logo" src={logo} alt="логотип сайта" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="reg"
        >
          <div className="register__inputs">
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-name">Имя</label>
              <input
                className="register__input"
                name="reg-name"
                id="reg-name"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
              <span
                className="register__error"
                id="reg-name-error"
              >

              </span>
            </div>
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-email">E-mail</label>
              <input
                className="register__input"
                name="reg-email"
                id="reg-email"
                type="email"
                required
              />
              <span
                className="register__error"
                id="reg-email-error"
              >
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-pswd">Пароль</label>
              <input
                className="register__input"
                name="reg-pswd"
                id="reg-pswd"
                type="password"
                minLength="6"
                maxLength="20"
                required
              />
              <span
                className="register__error"
                id="reg-pswd-error"
              >
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <button
            className="register__button-submit"
            type="submit"
            aria-label="кнопка Зарегистрироваться"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">Уже зарегистрированы?&nbsp;
          <Link
            to="/signin"
            className="register__text register__link"
          >
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
