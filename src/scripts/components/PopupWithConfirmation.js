import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(handleConfirm, popupSelector) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._submit = this._popup.querySelector('.popup__submit-button');
  }
  open = (card) => {
    this.card = card;
    super.open();
  };
  setEventListeners = () => {
    super.setEventListeners();
    this._submit.addEventListener('click', () => this._handleConfirm(this.card));
  };
}
export default PopupWithConfirmation;
