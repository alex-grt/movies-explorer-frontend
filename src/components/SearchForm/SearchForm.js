import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  function handleChange(evt) {
    props.setQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.renderMovies();
  }

  return (
    <section className="search" aria-label="поиск">
      <form
        className="search__form"
        name="search"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search__input"
          name="query"
          id="query"
          type="text"
          value={props.query}
          onChange={handleChange}
          placeholder="Фильм"
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
        <FilterCheckbox
          isShort={props.isShort}
          toggleShort={props.toggleShort}
        />
        <p className="search__filter-text">Короткометражки</p>
      </div>
      <div className="search__line" />
    </section>
  );
}

export default SearchForm;
