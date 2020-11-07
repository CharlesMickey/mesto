let profile = document.querySelector(".profile");
let profileProfileInfo = profile.querySelector(".profile__profile-info");
let buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupContainer = popup.querySelector(".popup__container");
let buttonCloseForm = popupContainer.querySelector(".popup__button-close");
let paragraphL = document.querySelector(".popup__your-name");
let paragraph = document.querySelector(".profile__name");
let profileInterests = document.querySelector(".profile__interests");
let interests = document.querySelector(".popup__interests");
console.log(paragraph.textContent);
paragraphL.value = paragraph.textContent;
interests.value = profileInterests.textContent;

function showClic() {
popup.classList.toggle('popup_opened');
}

buttonOpenForm.addEventListener('click', showClic);
buttonCloseForm.addEventListener('click', showClic);
