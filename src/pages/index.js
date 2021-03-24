import './index.css';

import {
  buttonOpenForm,
  buttonOpenImgAddForm,
  profileForm,
  formImage,
  nameInput,
  interests,
  validationConfig,
  options,
} from '../utils/constants.js'

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Api from '../components/Api.js';

const popupWithImage = new PopupWithImage('#popup-image')

const userInfoClass = new UserInfo({
  selectorUserName: '.profile__name',
  selectorAboutUser: '.profile__interests',
  selectorAvatarImg: '.profile__avatar'
})

const api = new Api(options)

function createCard(item) {
  const addCard = new Card({
    data: item,
    cardSelector: "#element",
    handleCardClick: () => {
      popupWithImage.open(item)
    }
  });
  const cardElement = addCard.generateCard();
  return cardElement;
}

api.userInfo()
  .then((res) => {
    return userInfoClass.setUserAvatar(res)
  })
  .catch((err) => {
    console.log(`Внимание, ошибка: ${err}`);
  });

const defaultCard = new Section({
  renderer: (item) => {
    defaultCard.addItem(createCard(item))
  },
}, '.elements__list');

api.getInitialCards()
  .then((res) => {
    return defaultCard.rendererItems(res)
  })
  .catch((err) => {
    console.log(`Внимание, ошибка: ${err}`);
  });

const newValidClassProfileForm = new FormValidator(validationConfig, profileForm);
newValidClassProfileForm.enableValidation();

const profileFormClass = new PopupWithForm('#profile-popup', formSubmitHandler)

function showUserForm() {
  profileFormClass.open()
  const userInfo = userInfoClass.getUserInfo()
  nameInput.value = userInfo.userName;
  interests.value = userInfo.aboutUser;
  newValidClassProfileForm.quickValidationCheck();
}
const inputsDataUserForm = profileFormClass._getInputValues()

function formSubmitHandler(inputsDataUserForm) {
  userInfoClass.setUserInfo({
    nameInput: inputsDataUserForm.name,
    interests: inputsDataUserForm.about
  })
}

const newValidClassImgForm = new FormValidator(validationConfig, formImage);
newValidClassImgForm.enableValidation();

const imageFormClass = new PopupWithForm('#image-form', handlerCreateNewCard)

function showImgForm() {
  imageFormClass.open();
  formImage.reset();
  newValidClassImgForm.quickValidationCheck();
}

const inputsDataImgForm = imageFormClass._getInputValues()

function handlerCreateNewCard(inputsDataImgForm) {
  const item = [{
    name: inputsDataImgForm.name,
    link: inputsDataImgForm.link
  }];

  defaultCard.rendererItems(item)
  imageFormClass.close()
}

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);

// defaultCard.rendererItems()
