import Popup from './Popup.js';
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');

    console.log('popupSelector from Image:' + popupSelector);
    console.log('this._image from Image:' + this._image);
    console.log('this._caption from Caption:' + this._caption);
  }
  open = ({ name, link }) => {
    this._image.src = link;
    this._image.alt = name;
    this._popup.querySelector('.popup__caption').textContent = name;
    super.open();
  };
}
export default PopupWithImage;
