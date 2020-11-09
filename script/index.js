let profile = document.querySelector(".profile");
let profileProfileInfo = profile.querySelector(".profile__profile-info");
let buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupContainer = popup.querySelector(".popup__container");
let buttonCloseForm = popupContainer.querySelector(".popup__button-close");
let nameInput = document.querySelector('[name="name"]');
let profileName = document.querySelector(".profile__name");
let profileInterests = document.querySelector(".profile__interests");
let interests = document.querySelector('[name="interests"]');
let formElement = document.querySelector(".popup__form");

function showClic() {
popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    interests.value = profileInterests.textContent;
  }

}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent =  nameInput.value;
    profileInterests.textContent = interests.value;
    showClic();
}

formElement.addEventListener('submit', formSubmitHandler);

buttonOpenForm.addEventListener('click', showClic);
buttonCloseForm.addEventListener('click', showClic);
