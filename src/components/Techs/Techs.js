import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <article className="technology">
        <h3 className="technology__title">7 технологий</h3>
        <p className="technology__subtitle">На курсе веб-разработки мы
          освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="technology__list undecorated-list">
          <li className="technology__item">
            <p className="technology__item-text">HTML</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">CSS</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">JS</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">React</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">Git</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">Express.js</p>
          </li>
          <li className="technology__item">
            <p className="technology__item-text">mongoDB</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Techs;
