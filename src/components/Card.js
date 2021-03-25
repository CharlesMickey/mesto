export default class Card {
  constructor({
    data,
    cardSelector,
    handleCardClick
  }) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes
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

  _setListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDelete();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.element__image_popup_open').addEventListener('click', () => {
      this._handleCardClick()
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if(this._likes){
      this._element.querySelector('.element__like-counter').textContent = this._likes.length;
    }


    return this._element;
  }
}
