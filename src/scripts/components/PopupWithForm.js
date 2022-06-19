import Popup from './Popup.js';
class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => (this._formValues[input.name] = input.value));
    return this._formValues;
  }
  setInputValues(data) {
    this._inputList.forEach((input) => (input.value = data[input.name]));
  }
  _submitFormHandler = (e) => {
    e.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  };
  setEventListeners() {
    this.form.addEventListener('submit', this._submitFormHandler);
    super.setEventListeners();
  }
  close() {
    super.close();
    this.form.reset();
  }
}
export default PopupWithForm;
