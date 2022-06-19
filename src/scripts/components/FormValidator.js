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
  resetValidation = () => {
    this._inputList.forEach((_inputElement) => {
      this._hideInputError(_inputElement);
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
  enableValidation = () => {
    this._inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => this._checkInputValidity(_inputElement));
    });
    this._toggleButtonState();
  };
}
export default FormValidator;
