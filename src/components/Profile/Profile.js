import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useValidation';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const noDuplicate = values.name !== currentUser.name || values.email !== currentUser.email;

  React.useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUserUpdate({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <div className="profile__cover">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form"
          name="profile"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="profile__inputs">
            <div className="profile__cover-input">
              <div className="profile__named-input">
                <label className="profile__label" htmlFor="profile-name">Имя</label>
                <input
                  className="profile__input"
                  name="name"
                  id="profile-name"
                  type="text"
                  onChange={handleChange}
                  minLength="2"
                  maxLength="30"
                  placeholder={currentUser.name}
                  required
                />
              </div>
              <span
                className="profile__error"
                id="profile-name-error"
              >
                {errors.name ? errors.name : ''}
              </span>
            </div>
            <div className="profile__line" />
            <div className="profile__cover-input">
              <div className="profile__named-input">
                <label className="profile__label" htmlFor="profile-email">E-mail</label>
                <input
                  className="profile__input"
                  name="email"
                  id="profile-email"
                  type="email"
                  onChange={handleChange}
                  placeholder={currentUser.email}
                  required
                />
              </div>
              <span
                className="profile__error"
                id="profile-email-error"
              >
                {errors.email ? errors.email : ''}
              </span>
            </div>
          </div>
          <button
            className={`profile__button-submit${
              isValid && noDuplicate
                ? ''
                : ' profile__button-submit_inactive'
            }`}
            type="submit"
            aria-label="кнопка Редактировать"
            disabled={!isValid}
          >
            {props.buttonTitle}
          </button>
        </form>
        <Link
          to="/"
          className="profile__link"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
