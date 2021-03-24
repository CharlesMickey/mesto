export default class Api {
  constructor({
    addressApi,
    token
  }) {
    this._addressApi = addressApi;
    this._token = token;
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
