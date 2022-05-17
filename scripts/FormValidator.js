const showInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};
const hideInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};
const checkInputValidity = (inputElement, formElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, config.inputErrorClass, config.errorClass);
  } else {
    hideInputError(inputElement, config.inputErrorClass, config.errorClass);
  }
  toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
};
const resetErrors = (popup, config) => {
  const formElement = popup.querySelector(config.formSelector);
  const inputList = formElement.querySelectorAll(config.inputSelector);
  inputList.forEach((inputElement) => {
    hideInputError(inputElement, config.inputErrorClass, config.errorClass);
  });
  toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
};
const enableValidation = ({ formSelector, inputSelector, ...config }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    const inputList = formElement.querySelectorAll(inputSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>
        checkInputValidity(inputElement, formElement, config)
      );
    });
    toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
  });
};
const toggleButtonState = (formElement, submitButtonSelector, inactiveButtonClass) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  buttonElement.disabled = !formElement.checkValidity();
  buttonElement.classList.toggle(inactiveButtonClass, !formElement.checkValidity());
};
enableValidation(config);
