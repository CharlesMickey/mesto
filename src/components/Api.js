export default class Api {
  constructor(options) {
    this._addressApi = options.addressApi;
    this._headers = options.headers;
  }

  _setConfigApi(endOfUrl) {
    return fetch(`${this._addressApi}${endOfUrl}`, {
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }


  getInitialCards() {
    return this._setConfigApi("cards")
  }
}
