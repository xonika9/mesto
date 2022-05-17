import initialCards from './cards.js';
import config from './config.js';
import Card from './Card;js';
import FormValidator from './FormValidator.js';
const imagePopupContainer = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopupContainer.querySelector('.popup__close-button');
const popupImage = imagePopupContainer.querySelector('.popup__image');
const popupCaption = imagePopupContainer.querySelector('.popup__caption');
const profilePopupContainer = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = profilePopupContainer.querySelector('.popup__input_type_name');
const aboutInput = profilePopupContainer.querySelector('.popup__input_type_about');
const profileCloseButton = profilePopupContainer.querySelector('.popup__close-button');
const profileEditForm = profilePopupContainer.querySelector('.popup__form');
const cardPopupContainer = document.querySelector('.popup_type_add-card');
const cardAddButton = document.querySelector('.profile__add-button');
const titleInput = cardPopupContainer.querySelector('.popup__input_type_card-title');
const linkInput = cardPopupContainer.querySelector('.popup__input_type_image-link');
const cardCloseButton = cardPopupContainer.querySelector('.popup__close-button');
const cardAddForm = cardPopupContainer.querySelector('.popup__form');
const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.card__template');
function getCardsList() {
  const cardsList = initialCards.map(getCard);
  cardsContainer.append(...cardsList);
}
function getCard(item) {
  const newCard = template.content.cloneNode(true);
  const title = newCard.querySelector('.card__title');
  const image = newCard.querySelector('.card__photo');
  const removeButton = newCard.querySelector('.card__remove');
  const likeButton = newCard.querySelector('.card__like');
  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;
  removeButton.addEventListener('click', handleRemoveCard);
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like_active'));
  image.addEventListener('click', () => handleOpenImage(item));
  return newCard;
}
function handleRemoveCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}
function openPopup(modalWindow) {
  modalWindow.classList.add('popup_is-opened');
  document.addEventListener('click', handleOverlayClose);
  document.addEventListener('keydown', handleEscClose);
}
function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_is-opened');
  document.removeEventListener('click', handleOverlayClose);
  document.removeEventListener('keydown', handleEscClose);
}
function handleOpenProfile() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  resetErrors(profilePopupContainer, config);
  openPopup(profilePopupContainer);
}
function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(profilePopupContainer);
}
function handleOpenImage(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(imagePopupContainer);
}
function handleOpenCard() {
  titleInput.value = '';
  linkInput.value = '';
  resetErrors(cardPopupContainer, config);
  openPopup(cardPopupContainer);
}
function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = getCard({
    name: titleInput.value,
    link: linkInput.value,
  });
  cardsContainer.prepend(newCard);
  closePopup(cardPopupContainer);
}
function handleOverlayClose(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    closePopup(evt.target);
  }
}
function handleEscClose(evt) {
  const escCode = 'Escape';
  if (evt.key === escCode) {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    closePopup(popupIsOpened);
  }
}
profileEditButton.addEventListener('click', handleOpenProfile);
profileCloseButton.addEventListener('click', () => closePopup(profilePopupContainer));
profileEditForm.addEventListener('submit', handleSubmitProfile);
imageCloseButton.addEventListener('click', () => closePopup(imagePopupContainer));
cardAddButton.addEventListener('click', handleOpenCard);
cardAddForm.addEventListener('submit', handleAddCard);
cardCloseButton.addEventListener('click', () => closePopup(cardPopupContainer));
getCardsList();
