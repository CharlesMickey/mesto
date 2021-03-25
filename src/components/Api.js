export default class Api {
  constructor(options) {
    this._addressApi = options.addressApi;
    this._headers = options.headers;
  }

  _setConfigApi(endOfUrl, param = {
    headers: this._headers,
  }) {
    return fetch(`${this._addressApi}${endOfUrl}`, param)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  userInfo() {
    return this._setConfigApi("users/me")
  }

  getInitialCards() {
    return this._setConfigApi("cards")
  }

  editProfile(data) {
    return this._setConfigApi("users/me", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }





}
