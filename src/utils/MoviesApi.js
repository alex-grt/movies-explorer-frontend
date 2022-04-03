/* класс выполнения запросов авторизации */
class MoviesApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  /* обработка запроса */
  _handleRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }

  /* запрос фильмов */
  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {"content-type": "application/json"}
    })
    .then(this._handleRequest);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;
