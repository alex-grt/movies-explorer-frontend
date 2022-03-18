import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__cover">
        <h2 className="profile__title">Привет, Username!</h2>
        <form
          className="profile__form"
          name="profile"
        >
          <div className="profile__inputs">
            <div className="profile__cover-input">
              <div className="profile__named-input">
                <label className="profile__label" htmlFor="profile-name">Имя</label>
                <input
                  className="profile__input"
                  name="profile-name"
                  id="profile-name"
                  type="text"
                  defaultValue="Username"
                  minLength="2"
                  maxLength="30"
                  required
                />
              </div>
              <span
                className="profile__error"
                id="profile-name-error"
              >

              </span>
            </div>
            <div className="profile__line" />
            <div className="profile__cover-input">
              <div className="profile__named-input">
                <label className="profile__label" htmlFor="profile-email">E-mail</label>
                <input
                  className="profile__input"
                  name="profile-email"
                  id="profile-email"
                  defaultValue="example@example.com"
                  type="email"
                  required
                />
              </div>
              <span
                className="profile__error"
                id="profile-email-error"
              >
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <button
            className="profile__button-submit"
            type="submit"
            aria-label="кнопка Войти"
          >
            Редактировать
          </button>
        </form>
        <Link
          to="/"
          className="profile__link"
        >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
