import './Register.css';
import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useValidation';

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onRegister({
      name: values.name,
      email: values.email,
      password: values.pswd,
    });
  }

  return (
    <section className="register">
      <div className="register__cover">
        <Link
          to="/"
          className="register__logo-link"
        >
          <img className="register__logo" src={logo} alt="логотип сайта" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="reg"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="register__inputs">
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-name">Имя</label>
              <input
                className="register__input"
                name="name"
                id="reg-name"
                type="text"
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                required
              />
              <span
                className="register__error"
                id="reg-name-error"
              >
                {errors.name ? errors.name : ''}
              </span>
            </div>
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-email">E-mail</label>
              <input
                className="register__input"
                name="email"
                id="reg-email"
                type="email"
                onChange={handleChange}
                required
              />
              <span
                className="register__error"
                id="reg-email-error"
              >
                {errors.email ? errors.email : ''}
              </span>
            </div>
            <div className="register__cover-input">
              <label className="register__label" htmlFor="reg-pswd">Пароль</label>
              <input
                className="register__input"
                name="pswd"
                id="reg-pswd"
                type="password"
                onChange={handleChange}
                minLength="6"
                maxLength="20"
                required
              />
              <span
                className="register__error"
                id="reg-pswd-error"
              >
                {errors.pswd ? errors.pswd : ''}
              </span>
            </div>
          </div>
          <button
            className={`register__button-submit${
              isValid && !props.buttonLocked
                ? ''
                : ' register__button-submit_inactive'
            }`}
            type="submit"
            aria-label="кнопка Зарегистрироваться"
            disabled={!isValid && props.buttonLocked}
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
