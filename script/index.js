const profile = document.querySelector(".profile");
const popupsList = document.querySelectorAll('.popup')
const profileProfileInfo = profile.querySelector(".profile__profile-info");
const buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector("#profile-popup");
const imgForm = document.querySelector("#image-form");
const popupContainer = profilePopup.querySelector(".popup__container");
const nameInput = document.querySelector('[name="name"]');
const profileName = document.querySelector(".profile__name");
const profileInterests = document.querySelector(".profile__interests");
const interests = document.querySelector('[name="about"]');
const formElement = document.querySelector(".popup__form");
const imgPopup = document.querySelector("#popup-image");
const addName = imgForm.querySelector('[name="name"]');
const addLink = document.querySelector('[name="link"]');
const formImage = imgForm.querySelector(".popup__form");
const profilePopupSubmit = formElement.querySelector("#profile-popup__submit");
const elements = document.querySelector(".elements");
const cardList = document.querySelector(".elements__list");
const elementTemplate = document.querySelector("#element").content;

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

function render() {
  initialCards.forEach(function (item) {
    const addCard = createCard(item);
    addCardDocElem(addCard);
  });
}

function closePopup() {
  const popupClose = document.querySelector('.popup_opened')
  popupClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEcs);
  document.removeEventListener('click', closePopupClickOverlay);
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

function openPopup(popup) {
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

function handleOpenImagePopup(item) {
  imgPopup.querySelector('.popup__image').src = item.link;
  imgPopup.querySelector('.popup__image-title').textContent = item.name;
  openPopup(imgPopup)
}

function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function setListeners(elem, item) {
  elem.querySelector('.element__trash').addEventListener('click', handleDelete);
  elem.querySelector('.element__like').addEventListener('click', handleLike);
  elem.querySelector('.element__image_popup_open').addEventListener('click', () => {
    handleOpenImagePopup(item)
  });
}

function addCardDocElem(elem) {
  cardList.append(elem);
}

function createCard(item) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__title').textContent = item.name;
  setListeners(element, item);
  return element;
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

function handlerCreateNewCard(evt) {
  evt.preventDefault();
  const item = {
    name: addName.value,
    link: addLink.value
  }
  const element = createCard(item);
  addNewCard(element);
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', handlerCreateNewCard);

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);



render();
