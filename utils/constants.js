export const initialCards = [{
  name: 'Финский залив',
  link: './images/mWCRoXLVIsk.jpg'
},
{
  name: 'Ладожское озеро',
  link: './images/vzlWlVweWA4.jpg'
},
{
  name: 'Урал',
  link: './images/Zaporoj.jpg'
},
{
  name: 'Париж',
  link: './images/Paris.jpg'
},
{
  name: 'Барнаул',
  link: './images/Barnaul.jpg'
},
{
  name: 'Черногория',
  link: './images/Chernogor.jpg'
}
];

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
export const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector("#profile-popup");
const imgForm = document.querySelector("#image-form");
export const nameInput = document.querySelector('[name="name"]');
export const interests = document.querySelector('[name="about"]');
export const profileForm = profilePopup.querySelector(".popup__form");
export const addName = imgForm.querySelector('[name="name"]');
export const addLink = document.querySelector('[name="link"]');
export const formImage = imgForm.querySelector(".popup__form");
