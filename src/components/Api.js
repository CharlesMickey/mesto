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

  addNewCard(data) {
    return this._setConfigApi("cards", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
  }

  deleteCard(id) {
    return this._setConfigApi(`cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  putLike(id) {
    return this._setConfigApi(`cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
  }
  
  removeLike(id) {
    return this._setConfigApi(`cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

}
