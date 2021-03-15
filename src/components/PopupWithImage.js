import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImg = this._popup.querySelector('.popup__image')
    this._imgTitle = this._popup.querySelector('.popup__image-title')
  }

  open(item) {
    this._popupImg.src = item.link;
    this._imgTitle.textContent = item.name;
    super.open()
  }
}
