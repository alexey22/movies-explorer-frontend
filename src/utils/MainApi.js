class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getHeaders() {
    return this._headers;
  }

  setAuthHeaderTokenFromLocalStorage() {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  _handleResponse(res, errMessage) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(errMessage);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: { ...this._headers, 'Content-Type': 'application/json' },
    }).then((res) =>
      this._handleResponse(res, 'Ошибка при получении данных пользователя')
    );
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) =>
      this._handleResponse(res, 'Ошибка при сохранении данных пользователя')
    );
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) =>
      this._handleResponse(res, 'Ошибка при загрузке сохраненных фильмов')
    );
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) =>
      this._handleResponse(res, 'Ошибка при удалении фильма из сохраненных')
    );
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        ...movie,
      }),
    }).then((res) => this._handleResponse(res, 'Ошибка при сохранении фильма'));
  }
}

const MainApi = new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

export default MainApi;
