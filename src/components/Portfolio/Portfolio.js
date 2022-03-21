import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list undecorated-list">
        <li className="portfolio__item">
          <a
            href="https://github.com/alex-grt/how-to-learn#readme"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/alex-grt/russian-travel#readme"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/alex-grt/react-mesto-auth#readme"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <div className="portfolio__arrow"></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
