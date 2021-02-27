
export default class FormValidator {
  constructor(config, selectorTemplate) {
    this._config = config;
    this._selectorTemplate = selectorTemplate;

  }
  showError(formElement, inputElement, config) {
    const error = formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = inputElement.validationMessage;
    error.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
  }

  hideError(formElement, inputElement, config) {
    const error = formElement.querySelector(`#${inputElement.id}-error`);
    error.textContent = '';
    inputElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
  }

  disableValidation(formElement, config) {
    const inputsList = formElement.querySelectorAll(config.inputSelector);
    inputsList.forEach((inputElement) => {
      hideError(formElement, inputElement, config)
    });
  }

  checkInputValidity(formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, config);
    } else {
      hideError(formElement, inputElement, config);
    }
  }

  setButtonState(button, formValid, config) {
    if (formValid) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    }
  }

  setEventListeners(formElement, config) {
    const inputsList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);

    inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config);
        setButtonState(submitButton, formElement.checkValidity(), config);
      });
    });
  }

  enableValidation(config) {
    const formsElement = document.querySelectorAll(config.formSelector);
    formsElement.forEach((formElement) => {
      setEventListeners(formElement, config);
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const submitButton = formElement.querySelector(config.submitButtonSelector);
      setButtonState(submitButton, formElement.checkValidity(), config)
    });
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

// enableValidation(validationConfig);
