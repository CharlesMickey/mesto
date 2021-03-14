const finZaliv = new URL('../images/mWCRoXLVIsk.jpg',
  import.meta.url);
const ladoga = new URL('../images/vzlWlVweWA4.jpg',
  import.meta.url);
const ural = new URL('../images/Zaporoj.jpg',
  import.meta.url)
const paris = new URL('../images/Paris.jpg',
  import.meta.url);
const barnaul = new URL('../images/Barnaul.jpg',
  import.meta.url);
const chernogoria = new URL('../images/Chernogor.jpg',
  import.meta.url)

export const initialCards = [{
    name: 'Финский залив',
    link: finZaliv
  },
  {
    name: 'Ладожское озеро',
    link: ladoga
  },
  {
    name: 'Урал',
    link: ural
  },
  {
    name: 'Париж',
    link: paris
  },
  {
    name: 'Барнаул',
    link: barnaul
  },
  {
    name: 'Черногория',
    link: chernogoria
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
