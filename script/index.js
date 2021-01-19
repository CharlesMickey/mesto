const profile = document.querySelector(".profile");
const profileProfileInfo = profile.querySelector(".profile__profile-info");
const buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");
const imgForm = document.querySelector("#image-form");
const popupContainer = popup.querySelector(".popup__container");
const buttonCloseForm = popupContainer.querySelector(".popup__button-close");
const buttonCloseImgAddForm = document.querySelector(".button-close");
const buttonCloseImgPopupForm = document.querySelector(".popup__button-close_popup_img");
const nameInput = document.querySelector('[name="name"]');
const profileName = document.querySelector(".profile__name");
const profileInterests = document.querySelector(".profile__interests");
const interests = document.querySelector('[name="interests"]');
const formElement = document.querySelector(".popup__form");
const imgPopup = document.querySelector("#popup-image");
const addName = imgForm.querySelector('[name="name"]');
const addLink = document.querySelector('[name="link"]');
const formImage = imgForm.querySelector(".popup__form");

const elements = document.querySelector(".elements");
const cardList = document.querySelector(".elements__list");
const elementTemplate = document.querySelector("#element").content;

const initialCards = [
  {
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
  initialCards.forEach(function(item) {
    const addCard = createCard(item);
    addCardDocElem(addCard);
  });
}

function handleOpenImagePopup(evt) {
  const event = evt.target;
  imgPopup.querySelector('.popup__image').src = event.getAttribute('src', true);
  imgPopup.querySelector('.popup__image-title').textContent=event.closest('.element').textContent;
  imgPopup.classList.add('popup_opened');
}

function handleDelete(evt) {
	evt.target.closest('.element').remove();
}

function handleLike(evt) {
	evt.target.classList.toggle('element__like_active');
}

function setListeners(elem) {
  elem.querySelector('.element__trash').addEventListener('click', handleDelete);
  elem.querySelector('.element__like').addEventListener('click', handleLike);
  elem.querySelector('.element__image_popup_open').addEventListener('click', handleOpenImagePopup);
}
  function addCardDocElem(elem){
  cardList.append(elem);
}

function createCard(item) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__image').src=item.link;
  element.querySelector('.element__title').textContent=item.name;
  setListeners(element);
  return element;
}


function showUserForm() {
  popup.classList.toggle('popup_opened');

    if (popup.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent;
      interests.value = profileInterests.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent =  nameInput.value;
    profileInterests.textContent = interests.value;
    showUserForm();
}

function showImgForm() {
  imgForm.classList.toggle('popup_opened');
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
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__title').textContent=addName.value;
  element.querySelector('.element__image').src=addLink.value;
  setListeners(element);
  addNewCard(element);
  showImgForm();
  resetEditMode();
}

function closeImagePopup() {
  imgPopup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', handlerCreateNewCard);

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonCloseImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);
buttonCloseForm.addEventListener('click', showUserForm);
buttonCloseImgPopupForm.addEventListener('click', closeImagePopup);

render();
