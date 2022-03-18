import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__cover">
        <p className="footer__copyright" lang="en">
          &copy; {year}
        </p>
        <ul className="footer__links undecorated-list">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
