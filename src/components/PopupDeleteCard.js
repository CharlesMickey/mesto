import Popup from './Popup.js'

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupForm = this._popupContainer.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector(".popup__button-submit")
  }

  setHandlerFormSubmit(data) {
    this.setHandlerFormSubmit = data;
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._popupForm) {
      this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this.setHandlerFormSubmit(this);
      });
    }
  }
}
