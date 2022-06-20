class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
  _handleCloseOnClick = (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
      this.close();
    }
  };
  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleCloseOnClick);
  }
}
export default Popup;
