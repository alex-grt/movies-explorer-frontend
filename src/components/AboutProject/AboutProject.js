import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__table">
        <div className="about__column">
          <h3 className="about__cell-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__cell">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__column">
          <h3 className="about__cell-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__cell">
            У каждого этапа был мягкий и жёсткий
            дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__visual">
        <p className="about__visual-item about__visual-item_theme_green">1 неделя</p>
        <p className="about__visual-item about__visual-item_theme_gray">4 недели</p>
        <p className="about__visual-item">Back-end</p>
        <p className="about__visual-item">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
