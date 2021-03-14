export default class UserInfo {
  constructor({
    selectorUserName,
    selectorAboutUser
  }) {
    this._selectorUserName = selectorUserName;
    this._selectorAboutUser = selectorAboutUser;
    this._userName = document.querySelector(this._selectorUserName)
    this._aboutUser = document.querySelector(this._selectorAboutUser)
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      aboutUser: this._aboutUser.textContent,
    }
  }

  setUserInfo({
    nameInput,
    interests
  }) {
    this._userName.textContent = nameInput;
    this._aboutUser.textContent = interests;
  }

}
