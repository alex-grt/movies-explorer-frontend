import './SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </main>
  );
}

export default SavedMovies;
