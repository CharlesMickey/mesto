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
const formElement = document.querySelector(".popup__form");
const addName = imgForm.querySelector('[name="name"]');
const addLink = document.querySelector('[name="link"]');
const formImage = imgForm.querySelector(".popup__form");
const profilePopupSubmit = formElement.querySelector("#profile-popup__submit");
const cardList = document.querySelector(".elements__list");



const initialCards = [{
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

function renderDefaultCard() {
  initialCards.forEach(function (item) {
    const addCard = new Card(item, "#element");
    const defaultCard = addCard.generateCard();
    cardList.append(defaultCard);
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
      closePopup(popup)
    }
  })
})

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEcs)
}

function showUserForm() {
  openPopup(profilePopup)
  nameInput.value = profileName.textContent;
  interests.value = profileInterests.textContent;
  disableValidation(formElement, validationConfig)
  setButtonState(profilePopupSubmit, formElement.checkValidity(), validationConfig)
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInterests.textContent = interests.value;
  closePopup();
}

function showImgForm() {
  openPopup(imgForm);
  resetEditMode();
  disableValidation(formImage, validationConfig);
}

function resetEditMode() {
  addName.value = '';
  addLink.value = '';
}

function addNewCard(elem) {
  cardList.prepend(elem);
}

function handlerCreateNewCard() {
  const item = {
    name: addName.value,
    link: addLink.value
  }
  const addCard = new Card(item, "#element");
  const newCard = addCard.generateCard();
  addNewCard(newCard);
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', () => {
  handlerCreateNewCard();
});

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);

renderDefaultCard();
