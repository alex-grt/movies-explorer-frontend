/* класс выполнения запросов авторизации */
class MainApi {
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

  /* запрос на регистрацию пользователя */
  registrationUser({name, email, password}) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({name, email, password})
    })
    .then(this._handleRequest);
  }

  /* запрос на авторизацию пользователя */
  authorizationUser({email, password}) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({email, password})
    })
    .then(this._handleRequest);
  }

  /* запрос данных пользователя */
  getUserData(token) {
    this._token = token;

    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${this._token}`
      }
    })
    .then(this._handleRequest);
  }

  /* запрос на изменение информации о пользователе */
  setUserData({name, email}) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${this._token}`
      },
      body: JSON.stringify({name, email})
    })
    .then(this._handleRequest);
  }

  /* запрос сохранённых фильмов */
  getMovies() {
    return fetch(`${this._baseUrl}movies/`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${this._token}`
      }
    })
    .then(this._handleRequest);
  }

  /* запрос на добавление фильма */
  addMovie(movie) {
    return fetch(`${this._baseUrl}movies/`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${this._token}`
      },
      body: JSON.stringify(movie)
    })
    .then(this._handleRequest);
  }

  /* запрос на удаление фильма */
  deleteMovie(id) {
    return fetch(`${this._baseUrl}movies/${id}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${this._token}`
      }
    })
    .then(this._handleRequest);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer.agrt.nomoredomains.work/'
});

export default mainApi;
