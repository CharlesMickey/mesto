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

function createCard(item, ownerCards) {
  const addCard = new Card({
    data: item,
    cardSelector: "#element",
    handleCardClick: () => {
      popupWithImage.open(item)
    },
    handleDeleteCard: () => {
      const popupDeleteCard = new PopupDeleteCard({
        popupSelector: '#delete-form',
        api: api.deleteCard(item._id)
      })
      popupDeleteCard.open()

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
  api.editProfile(inputsDataUserForm)
    .then((res) => {
      return userInfoClass.setUserInfo(res)
    })
    .catch((err) => {
      console.log(`Внимание, ошибка: ${err}`);
    });
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
  api.addNewCard(inputsDataImgForm)
    .then((res) => {
      return defaultCard.rendererItems(res)
    })
    .catch((err) => {
      console.log(`Внимание, ошибка: ${err}`);
    });
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
