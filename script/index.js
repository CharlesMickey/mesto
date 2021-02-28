import { validationConfig } from './FormValidator.js';
import { initialCards } from './constants.js'

import FormValidator from './FormValidator.js';
import Card from './Card.js';

const profile = document.querySelector(".profile");
const popupsList = document.querySelectorAll('.popup')
const profileProfileInfo = profile.querySelector(".profile__profile-info");
const buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector("#profile-popup");
const imgForm = document.querySelector("#image-form");
const nameInput = document.querySelector('[name="name"]');
const profileName = document.querySelector(".profile__name");
const profileInterests = document.querySelector(".profile__interests");
const interests = document.querySelector('[name="about"]');
const profileForm = profilePopup.querySelector(".popup__form");
const addName = imgForm.querySelector('[name="name"]');
const addLink = document.querySelector('[name="link"]');
const formImage = imgForm.querySelector(".popup__form");
const cardList = document.querySelector(".elements__list");


function creatNewElementClassCard(item) {
  const addCard = new Card(item, "#element", openPopup);
  return addCard.generateCard();
}

function renderDefaultCard() {
  initialCards.forEach(function(item) {
    cardList.append(creatNewElementClassCard(item));
  });
}

function closePopup() {
  const popupClose = document.querySelector('.popup_opened')
  popupClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEcs);
}

function closePopupEcs(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

popupsList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEcs)
}

const newValidClassProfileForm = new FormValidator(validationConfig, profileForm);
newValidClassProfileForm.enableValidation();

function showUserForm() {
  openPopup(profilePopup)
  nameInput.value = profileName.textContent;
  interests.value = profileInterests.textContent;
  newValidClassProfileForm.quickValidationCheck();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInterests.textContent = interests.value;
  closePopup();
}

const newValidClassImgForm = new FormValidator(validationConfig, formImage);
newValidClassImgForm.enableValidation();

function showImgForm() {
  openPopup(imgForm);
  formImage.reset();
  newValidClassImgForm.quickValidationCheck();
}

function addNewCard(elem) {
  cardList.prepend(elem);
}

function handlerCreateNewCard() {
  const item = {
    name: addName.value,
    link: addLink.value
  }
  addNewCard(creatNewElementClassCard(item));
  closePopup();
}

profileForm.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', () => {
  handlerCreateNewCard();
});

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);

renderDefaultCard();
