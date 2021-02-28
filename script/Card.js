export default class Card {
  constructor(data, cardSelector, openPopup) {
  this._cardSelector = cardSelector;
  this._name = data.name;
  this._link = data.link;
  this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);

    return cardElement;
  }

   _handleDelete() {
    this._element.closest('.element').remove();
  }

   _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleOpenImagePopup() {
    const popupImg = document.querySelector("#popup-image");
    popupImg.querySelector('.popup__image').src = this._link;
    popupImg.querySelector('.popup__image-title').textContent = this._name;
    this._openPopup(popupImg)
  }

  _setListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDelete();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.element__image_popup_open').addEventListener('click', () => {
      this._handleOpenImagePopup()
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

  	return this._element;
  }
}
