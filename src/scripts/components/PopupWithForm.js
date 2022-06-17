import Popup from './Popup.js';
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    console.log('popupSelector from Form:' + popupSelector);
    console.log('handleFormSubmit from Form:' + handleFormSubmit);

    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }
  _getInputValues = () => {
    this._formValues = {};
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._inputList.forEach((input) => (this._formValues[input.name] = input.value));
  };
  getForm() {
    return this._form;
  }
  setEventListeners() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
  }
}
export default PopupWithForm;
