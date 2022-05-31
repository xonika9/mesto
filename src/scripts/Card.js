class Card {
  constructor(item, templateSelector, handleOpenImage) {
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
    this._handleOpenImage = handleOpenImage;
  }
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };
  _toggleLike = () => {
    this._likeButton.classList.toggle('card__like_active');
  };
  _handleRemove = () => {
    this._card.remove();
    this._card = null;
  };
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', this._toggleLike);
    this._removeButton.addEventListener('click', this._handleRemove);
    this._cardImage.addEventListener('click', () =>
      this._handleOpenImage({ name: this._name, link: this._link })
    );
  };
  generateCard = () => {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__photo');
    this._likeButton = this._card.querySelector('.card__like');
    this._removeButton = this._card.querySelector('.card__remove');
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._card;
  };
}
export default Card;
