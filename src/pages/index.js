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
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Api from '../components/Api.js';

let ownerCards = null;
const popupWithImage = new PopupWithImage('#popup-image')


const userInfoClass = new UserInfo({
  selectorUserName: '.profile__name',
  selectorAboutUser: '.profile__interests',
  selectorAvatarImg: '.profile__avatar'
})

const api = new Api(options)

const popupDeleteCard = new PopupDeleteCard('#delete-form')
popupDeleteCard.setEventListeners()

function handleCardDelete(item, card) {
  popupDeleteCard.setHandlerFormSubmit(() => {
    const buttonText = popupDeleteCard.getButtonName();
    popupDeleteCard.setButtonName("Сохранение...");
    api.deleteCard(item._id)
      .then(() => {
        card.deleteCard()

      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => popupDeleteCard.setButtonName(buttonText))

    popupDeleteCard.close();
  });

  popupDeleteCard.open();
}

function createCard(item, ownerCards) {
  const addCard = new Card({
    data: item,
    cardSelector: "#element",
    handleCardClick: () => {
      popupWithImage.open(item)
    },
    handleDeleteCard: () => {
      handleCardDelete(item, addCard)
    },
    ownerCards
  });
  const cardElement = addCard.generateCard();
  return cardElement;
}

const defaultCard = new Section({
  renderer: (item) => {
    defaultCard.addItem(createCard(item, ownerCards))
  },
}, '.elements__list');

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
  const buttonText = profileFormClass.getButtonName();
  profileFormClass.setButtonName("Сохранение..");
  api.editProfile(inputsDataUserForm)
    .then((res) => {
      return userInfoClass.setUserInfo(res)
    })
    .catch((err) => {
      console.log(`Внимание, ошибка: ${err}`);
    })
    .finally(() => profileFormClass.setButtonName(buttonText))
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
  const buttonText = imageFormClass.getButtonName();
  imageFormClass.setButtonName("Сохранение..");
  api
    .addNewCard(inputsDataImgForm)
    .then((inputsDataImgForm) => {
      return defaultCard.addItem(createCard(inputsDataImgForm, ownerCards))
    })
    .catch((err) => {
      console.log(`Внимание, ошибка: ${err}`);
    })
    .finally(() => imageFormClass.setButtonName(buttonText))

  imageFormClass.close()
}

buttonOpenImgAddForm.addEventListener('click', showImgForm);
buttonOpenForm.addEventListener('click', showUserForm);



Promise.all([api.getInitialCards(), api.userInfo()])
  .then(([cards, userData]) => {
    ownerCards = userData._id;
    userInfoClass.setUserInfo(userData)
    userInfoClass.setUserAvatar(userData)
    defaultCard.rendererItems(cards);
  })
  .catch((err) => {
    console.log(`${err}`);
  });
