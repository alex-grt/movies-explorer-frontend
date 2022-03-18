import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import thirtyThree from '../../images/cover/33.jpg';
import hundred from '../../images/cover/100.jpg';
import banksy from '../../images/cover/banksy.jpg';
import basquiat from '../../images/cover/basquiat.jpg';
import run from '../../images/cover/run.jpg';
import booksellers from '../../images/cover/booksellers.jpg';
import germany from '../../images/cover/germany.jpg';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__list undecorated-list">
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 42м"
          link={thirtyThree}
        />
        <MoviesCard
          title="Киноальманах «100 лет дизайна»"
          duration="1ч 42м"
          link={hundred}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="1ч 42м"
          link={banksy}
        />
        <MoviesCard
          title="Баския: Взрыв реальности"
          duration="1ч 42м"
          link={basquiat}
        />
        <MoviesCard
          title="Бег это свобода"
          duration="1ч 42м"
          link={run}
        />
        <MoviesCard
          title="Книготорговцы"
          duration="1ч 42м"
          link={booksellers}
        />
        <MoviesCard
          title="Когда я думаю о Германии ночью"
          duration="1ч 42м"
          link={germany}
        />
      </ul>
    </section>
  );
}

export default MoviesCardList;
