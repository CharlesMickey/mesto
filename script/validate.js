function showError(formElement, inputElement, config) {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.textContent = inputElement.validationMessage;
  error.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
}

function hideError(formElement, inputElement, config) {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.textContent = '';
  inputElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
}

function disableValidation(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);
  inputsList.forEach((inputElement) => {
    hideError(form, inputElement, config)
  });
}

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, config);
  } else {
    hideError(formElement, inputElement, config);
  }
}

function setButtonState(button, formValid, config) {
  if (formValid) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }
}

function setEventListeners(formElement, config) {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);

  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      setButtonState(submitButton, formElement.checkValidity(), config);
    });
  });
}

function enableValidation(config) {
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

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);
