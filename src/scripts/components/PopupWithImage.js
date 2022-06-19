import Popup from './Popup.js';
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
  }
  open = ({ title, link }) => {
    this._image.src = link;
    this._image.alt = title;
    this._popup.querySelector('.popup__caption').textContent = title;
    super.open();
  };
}
export default PopupWithImage;
