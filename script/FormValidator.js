export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showError(inputElement) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = inputElement.validationMessage;
    error.classList.add(this._config.errorClass);
    inputElement.classList.add(this._config.inputErrorClass);
  }

  _hideError(inputElement) {
    const error = this._formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = '';
    inputElement.classList.remove(this._config.errorClass);
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _disableValidation() {
    const inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    inputsList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _setButtonState(button, formValid) {
    if (formValid) {
      button.classList.remove(this._config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._config.inactiveButtonClass);
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

    inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._setButtonState(submitButton, this._formElement.checkValidity());
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      
      const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
      this._setButtonState(submitButton, this._formElement.checkValidity())
      this._disableValidation()
  }
}

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
