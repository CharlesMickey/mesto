import Popup from './Popup.js'

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popup = document.querySelector(this._popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._popupForm = this._popupContainer.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector(".popup__button-submit")
  }
  setButtonName(text) {
    this._submitButton.textContent = text;
  }
  getButtonName() {
    return this._submitButton.textContent;
  }
  setHandlerFormSubmit(data) {
    this.setHandlerFormSubmit = data;
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._popupForm) {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setHandlerFormSubmit();
    });
  }
  }
}
