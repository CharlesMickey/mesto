export default class UserInfo {
  constructor({
    selectorUserName,
    selectorAboutUser,
    selectorAvatarImg
  }) {
    this._selectorUserName = selectorUserName;
    this._selectorAboutUser = selectorAboutUser;
    this._selectorAvatarImg = selectorAvatarImg;
    this._userName = document.querySelector(this._selectorUserName)
    this._aboutUser = document.querySelector(this._selectorAboutUser)
    this._avatarImg = document.querySelector(this._selectorAvatarImg);
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

  setUserAvatar(data) {
    this._avatarImg.src = data.avatar;
  }

}
