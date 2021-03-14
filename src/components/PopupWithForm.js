import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handelFormSubmit = handleFormSubmit;
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._popupForm = this._popupContainer.querySelector('.popup__form');
    this.setEventListeners()
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input');

    this._formValues = {}; // создать объект и добавить в него значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });

    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._popupForm) {
      this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handelFormSubmit(this._getInputValues())
        this.close();
      })

    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
