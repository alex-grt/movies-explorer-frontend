import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="info">
        <div className="info__cover">
          <div>
            <h3 className="info__title">Александр</h3>
            <p className="info__subtitle">Фронтенд-разработчик, 36 лет</p>
            <p className="info__text">
              Родился и живу в Тамбове, получил высшее техническое образование.
              Со студенчества связан с IT. Тогда же познакомился с веб-разработкой и
              мне это понравилось. Недавно решился на перемены в своей жизни и
              прошёл обучение в Яндекс.Практикуме.
            </p>
          </div>
          <div className="info__links">
            <a
              href="https://www.facebook.com/"
              className="info__link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/alex-grt/"
              className="info__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img
          className="info__photo"
          src={photo}
          alt="фотография студента"
        />
      </article>
    </section>
  );
}

export default AboutMe;
