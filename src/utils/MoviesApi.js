class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res, errMessage) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(errMessage);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { ...this._headers, 'Content-Type': 'application/json' },
    }).then((res) =>
      this._handleResponse(res, 'Ошибка при получении данных пользователя')
    );
  }
}

const MoviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MoviesApi;
