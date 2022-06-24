class Card {
  constructor(cardInfo, templateSelector, handleCardClick, handleRemove, toggleLike, userId) {
    this._card = cardInfo;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemove = handleRemove;
    this._toggleLike = toggleLike;
    this._userId = userId;
  }
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };
  handleRemoveCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };
  getCardId = () => {
    return this._card._id;
  };
  _isMyLike = () => {
    return this._card.owner._id === this._userId;
  };
  isLiked = () => {
    return this._card.likes.some((item) => item._id === this._userId);
  };
  setLike = (data) => {
    this._card = data;
    if (this.isLiked()) {
      this._likeButton.classList.add('card__like_active');
    } else {
      this._likeButton.classList.remove('card__like_active');
    }
    this._likeCounter.textContent = this._card.likes.length;
  };
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => this._toggleLike(this));
    this._removeButton.addEventListener('click', () => this._handleRemove(this));
    this._cardImage.addEventListener('click', () =>
      this._handleCardClick({ name: this._card.name, link: this._card.link })
    );
  };
  generateCard = () => {
    this._newCard = this._getTemplate();
    this._newCard.querySelector('.card__title').textContent = this._card.name;
    this._newCard.querySelector('.card__like-counter').textContent = this._likeCounter;
    this._cardImage = this._newCard.querySelector('.card__photo');
    this._cardImage.src = this._card.link;
    this._cardImage.alt = this._card.name;
    this._likeButton = this._newCard.querySelector('.card__like');
    this._removeButton = this._newCard.querySelector('.card__remove');
    if (!this._isMyLike()) {
      this._removeButton.classList.add('card__remove_disabled');
      this._removeButton.setAttribute('disabled', true);
    }
    this._likeCounter = this._newCard.querySelector('.card__like-counter');
    this._setEventListeners();
    this.setLike(this._card);
    return this._newCard;
  };
}
export default Card;
