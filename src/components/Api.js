export default class Api {
  constructor(options) {
    this._addressApi = options.addressApi;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._addressApi}cards`, {
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}
