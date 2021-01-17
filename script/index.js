const profile = document.querySelector(".profile");
const profileProfileInfo = profile.querySelector(".profile__profile-info");
const buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
const buttonOpenImgAddForm = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");
const imgForm = document.querySelector("#image-form");
const popupContainer = popup.querySelector(".popup__container");
const buttonCloseForm = popupContainer.querySelector(".popup__button-close");
const buttonCloseImgAddForm = document.querySelector(".button-close");
const nameInput = document.querySelector('[name="name"]');
const profileName = document.querySelector(".profile__name");
const profileInterests = document.querySelector(".profile__interests");
const interests = document.querySelector('[name="interests"]');
const formElement = document.querySelector(".popup__form");

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
  initialCards.forEach(addCard);
}

function addCard(item) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__image').src=item.link;
  element.querySelector('.element__title').textContent=item.name;
  setListeners(element);
  cardList.append(element);
}

function setListeners(elem) {
  elem.querySelector('.element__trash').addEventListener('click', handleDelete);
  elem.querySelector('.element__like').addEventListener('click', handleLike)
}

function handleDelete(evt) {
	evt.target.closest('.element').remove();
}

function handleLike(evt) {
	evt.target.classList.toggle('element__like_active');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent =  nameInput.value;
    profileInterests.textContent = interests.value;
    showClic();
}

function handlerAddNewCard(evt) {
  evt.preventDefault();
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__image').src=addLink.value;
  element.querySelector('.element__title').textContent=addName.value;
  setListeners(element);
  cardList.prepend(element);
  showImgForm();
  resetEditMode();
}

  function resetEditMode() {
    addName.value = '';
    addLink.value = '';
  }

  function showClic() {
    popup.classList.toggle('popup_opened');

      if (popup.classList.contains('popup_opened')) {
        nameInput.value = profileName.textContent;
        interests.value = profileInterests.textContent;
      }
    }

function showImgForm() {
  imgForm.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', handlerAddNewCard);

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonCloseImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showClic);
buttonCloseForm.addEventListener('click', showClic);

render();
