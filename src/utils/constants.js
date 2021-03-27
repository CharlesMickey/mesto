export const options = {
  addressApi: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '7369cf7f-a783-416d-9205-2a3b31c3a870',
    "Content-Type": "application/json"
  }
};

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const profile = document.querySelector(".profile");
const profileProfileInfo = profile.querySelector(".profile__profile-info");
export const buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
export const openEditAvatarForm = profile.querySelector(".profile__avatar");
export const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector("#profile-popup");
const imgForm = document.querySelector("#image-form");
const avatarForm = document.querySelector("#avatar-form");
export const nameInput = document.querySelector('[name="name"]');
export const interests = document.querySelector('[name="about"]');
export const profileForm = profilePopup.querySelector(".popup__form");
export const formImage = imgForm.querySelector(".popup__form");
export const formAvatar = avatarForm.querySelector(".popup__form");
