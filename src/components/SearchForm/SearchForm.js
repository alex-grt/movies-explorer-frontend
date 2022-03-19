import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search" aria-label="поиск">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button
          className="search__button"
          type="submit"
          aria-label="кнопка Найти"
        >
          Найти
        </button>
      </form>
      <div className="search__filter">
        <FilterCheckbox />
        <p className="search__filter-text">Короткометражки</p>
      </div>
      <div className="search__line" />
    </section>
  );
}

export default SearchForm;
