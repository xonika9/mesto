class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }
  _showInputError = (inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };
  _hideInputError = (inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
    this._toggleButtonState();
  };
  resetErrors = () => {
    this._inputList.forEach((_inputElement) => {
      this._hideInputError(_inputElement);
    });
    this._toggleButtonState();
  };
  enableValidation = () => {
    this._inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => this._checkInputValidity(_inputElement));
    });
    this._toggleButtonState();
  };
  _toggleButtonState = () => {
    this._buttonElement.disabled = !this._formElement.checkValidity();
    this._buttonElement.classList.toggle(
      this._inactiveButtonClass,
      !this._formElement.checkValidity()
    );
  };
}
export default FormValidator;
// const showInputError = (inputElement, inputErrorClass, errorClass) => {
//   const errorElement = document.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add(errorClass);
// };
// const hideInputError = (inputElement, inputErrorClass, errorClass) => {
//   const errorElement = document.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };
// const checkInputValidity = (inputElement, formElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(inputElement, config.inputErrorClass, config.errorClass);
//   } else {
//     hideInputError(inputElement, config.inputErrorClass, config.errorClass);
//   }
//   toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
// };
// const resetErrors = (popup, config) => {
//   const formElement = popup.querySelector(config.formSelector);
//   const inputList = formElement.querySelectorAll(config.inputSelector);
//   inputList.forEach((inputElement) => {
//     hideInputError(inputElement, config.inputErrorClass, config.errorClass);
//   });
//   toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
// };
// const enableValidation = ({ formSelector, inputSelector, ...config }) => {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     const inputList = formElement.querySelectorAll(inputSelector);
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () =>
//         checkInputValidity(inputElement, formElement, config)
//       );
//     });
//     toggleButtonState(formElement, config.submitButtonSelector, config.inactiveButtonClass);
//   });
// };
// const toggleButtonState = (formElement, submitButtonSelector, inactiveButtonClass) => {
//   const buttonElement = formElement.querySelector(submitButtonSelector);
//   buttonElement.disabled = !formElement.checkValidity();
//   buttonElement.classList.toggle(inactiveButtonClass, !formElement.checkValidity());
// };
// enableValidation(config);
