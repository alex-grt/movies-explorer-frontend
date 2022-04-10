import './Login.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useValidation';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onLogin({
      email: values.email,
      password: values.pswd,
    });
  }

  return (
    <section className="login">
      <div className="login__cover">
        <Link
          to="/"
          className="login__logo-link"
        >
          <img className="login__logo" src={logo} alt="логотип сайта" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form
          className="login__form"
          name="login"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login__inputs">
            <div className="login__cover-input">
              <label className="login__label" htmlFor="login-email">E-mail</label>
              <input
                className="login__input"
                name="email"
                id="login-email"
                type="email"
                onChange={handleChange}
                required
              />
              <span
                className="login__error"
                id="login-email-error"
              >
                {errors.email ? errors.email : ''}
              </span>
            </div>
            <div className="login__cover-input">
              <label className="login__label" htmlFor="login-pswd">Пароль</label>
              <input
                className="login__input"
                name="pswd"
                id="login-pswd"
                type="password"
                onChange={handleChange}
                minLength="6"
                maxLength="20"
                required
              />
              <span
                className="login__error"
                id="login-pswd-error"
              >
                {errors.pswd ? errors.pswd : ''}
              </span>
            </div>
          </div>
          <button
            className={`login__button-submit${
              isValid && !props.buttonLocked
                ? ''
                : ' login__button-submit_inactive'
            }`}
            type="submit"
            aria-label="кнопка Войти"
            disabled={!isValid && props.buttonLocked}
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
