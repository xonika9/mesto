class Card {
  constructor({ title, link }, templateSelector, handleCardClick) {
    (this._title = title),
      (this._link = link),
      (this._templateSelector = templateSelector),
      (this._handleCardClick = handleCardClick);
  }
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };
  _toggleLike = (evt) => {
    this._likeButton.classList.toggle('card__like_active');
  };
  _handleRemove = () => {
    this._card.remove();
    this._card = null;
  };
  generateCard = () => {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__photo');
    this._likeButton = this._card.querySelector('.card__like');
    this._card.querySelector('.card__title').textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._likeButton.addEventListener('click', this._toggleLike);
    this._card.querySelector('.card__remove').addEventListener('click', this._handleRemove);
    this._cardImage.addEventListener('click', () =>
      this._handleCardClick({ title: this._title, link: this._link })
    );
    return this._card;
  };
}
export default Card;