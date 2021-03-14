import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(item) {
    this._popup.querySelector('.popup__image').src = item.link;
    this._popup.querySelector('.popup__image-title').textContent = item.name;
    super.open()
  }
}
