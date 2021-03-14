import {
  initialCards,
  buttonOpenForm,
  buttonOpenImgAddForm,
  profileForm,
  formImage,
  addName,
  nameInput,
  interests,
  addLink,
  validationConfig
} from '../utils/constants.js'

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';

const defaultCard = new Section({
  data: initialCards,
  renderer: (item) => {
    const addCard = new Card({
      data: item,
      cardSelector: "#element",
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage('#popup-image')
        popupWithImage.open(item)
      }
    });
    const cardElement = addCard.generateCard();
    defaultCard.addItem(cardElement)
  },

}, '.elements__list')

const newValidClassProfileForm = new FormValidator(validationConfig, profileForm);
newValidClassProfileForm.enableValidation();

const profileFormClass = new PopupWithForm('#profile-popup', formSubmitHandler)
const userInfoClass = new UserInfo({
  selectorUserName: '.profile__name',
  selectorAboutUser: '.profile__interests'
})

function showUserForm() {
  profileFormClass.open()
  const userInfo = userInfoClass.getUserInfo()
  nameInput.value = userInfo.userName;
  interests.value = userInfo.aboutUser;
  newValidClassProfileForm.quickValidationCheck();
}

function formSubmitHandler() {
  userInfoClass.setUserInfo({
    nameInput: nameInput.value,
    interests: interests.value
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

function handlerCreateNewCard() {
  const imageCard = new Section({
    data: [{
      name: addName.value,
      link: addLink.value
    }],
    renderer: (item) => {
      const addCard = new Card({
        data: item,
        cardSelector: "#element",
        handleCardClick: () => {
          const popupWithImage = new PopupWithImage('#popup-image')
          popupWithImage.open(item)
        }
      });
      const cardElement = addCard.generateCard();
      imageCard.addItem(cardElement)
    },

  }, '.elements__list')
  imageCard.rendererItems()
  imageFormClass.close()
}

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);

defaultCard.rendererItems()
