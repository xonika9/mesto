import Popup from './Popup.js';
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');
    console.log('popupSelector:' + popupSelector);
    console.log('this._image:' + this._image);
    console.log('this._caption:' + this._caption);
  }
  open = ({ name, link }) => {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  };
}
export default PopupWithImage;
