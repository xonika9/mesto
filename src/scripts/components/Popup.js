class Popup {
  constructor(popupSelector) {
    console.log('popupSelector from Popup:' + popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open = () => {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  };
  close = () => {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };
  _handleEscClose = (evt) => {
    const escCode = 'Escape';
    if (evt.key === escCode) {
      this.close();
    }
  };
  _handleClosePopup = (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
      this.close();
    }
  };
  setEventListeners = () => {
    this._popup.addEventListener('mousedown', this._handleClosePopup);
  };
}
export default Popup;
