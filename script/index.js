let profile = document.querySelector(".profile");
let profileProfileInfo = profile.querySelector(".profile__profile-info");
let buttonOpenForm = profileProfileInfo.querySelector(".profile__edit-button");
console.log(buttonOpenForm);

function showClic() {
alert("Миром правят собаки")
}

buttonOpenForm.addEventListener('click', showClic);
