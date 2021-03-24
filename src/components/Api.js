export default class Api {
  constructor({ options }) {
    this._addressApi = options.addressApi;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._addressApi}/cards`, {
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
