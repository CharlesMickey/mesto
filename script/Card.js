import { openPopup  } from './index.js';

export default class Card {
  constructor(data, cardSelector) {
  this._cardSelector = cardSelector;
  this._name = data.name;
  this._link = data.link;
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
    document.querySelector("#popup-image").querySelector('.popup__image').src = this._link;
    document.querySelector("#popup-image").querySelector('.popup__image-title').textContent = this._name;
    openPopup(document.querySelector("#popup-image"))
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
