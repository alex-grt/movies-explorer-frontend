import './Promo.css';
import web from '../../images/logo-web.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__cover">
        <div className="promo__description">
          <h1 className="promo__title">
            Учебный проект студента факультета
            Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать
            больше про этот проект и его создателя.
          </p>
        </div>
        <img
          className="promo__image"
          src={web}
          alt="земной шар, составленный из слова web"
        />
      </div>
      <a href="#about" className="promo__link">
        <button className="promo__button" type="button">
          Узнать больше
        </button>
      </a>
    </section>
  );
}

export default Promo;
