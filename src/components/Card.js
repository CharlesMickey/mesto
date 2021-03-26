export default class Card {
  constructor({
    data,
    cardSelector,
    handleCardClick,
    handleDeleteCard,
    handleLike,
    ownerCards,
    api
  }) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._likes = data.likes;
    this._ownerCards = ownerCards
    this._user = data.owner._id;
    this._handleLike = handleLike
    this._api = api
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  liked() {
    return this._liked;
  }

  putLike(data) {
    this._liked = data.likes.filter((like) => {
      return like._id === this._ownerCards;
    }).length;
    this._element.querySelector('.element__like-counter').textContent = data.likes.length;
    if (this._liked) {
      this._element.querySelector('.element__like').classList.add('element__like_active');

    } else {
      this._element.querySelector('.element__like').classList.remove('element__like_active');
    }
  }



  _setListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeleteCard();
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
    // this._handleLike()
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if (this._likes) {
      this._element.querySelector('.element__like-counter').textContent = this._likes.length;
    }
    if (this._ownerCards === this._user) {
      this._element.querySelector('.element__trash').style.display = 'block';
    }
    return this._element;
  }
}
