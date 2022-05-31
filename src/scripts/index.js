import '../pages/index.css';
import initialCards from './cards.js';
import config from './config.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
const imagePopupContainer = document.querySelector('.popup_type_image');
const popupImage = imagePopupContainer.querySelector('.popup__image');
const popupCaption = imagePopupContainer.querySelector('.popup__caption');
const profilePopupContainer = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = profilePopupContainer.querySelector('.popup__input_type_name');
const aboutInput = profilePopupContainer.querySelector('.popup__input_type_about');
const profileEditForm = profilePopupContainer.querySelector('.popup__form');
const cardPopupContainer = document.querySelector('.popup_type_add-card');
const cardAddButton = document.querySelector('.profile__add-button');
const titleInput = cardPopupContainer.querySelector('.popup__input_type_card-title');
const linkInput = cardPopupContainer.querySelector('.popup__input_type_image-link');
const cardAddForm = cardPopupContainer.querySelector('.popup__form');
const cardsContainer = document.querySelector('.elements');
const formValidators = {};
const getNewCard = (item) => {
  return new Card(item, '.card__template', handleOpenCard).generateCard();
};
const getCardsList = () => {
  initialCards.forEach((item) => {
    const cardElement = getNewCard(item);
    cardsContainer.append(cardElement);
  });
  return cardsContainer;
};
const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_is-opened');
  modalWindow.addEventListener('mousedown', handleClosePopup);
  document.addEventListener('keydown', handleEscClose);
};
const closePopup = (modalWindow) => {
  modalWindow.classList.remove('popup_is-opened');
  modalWindow.removeEventListener('mousedown', handleClosePopup);
  document.removeEventListener('keydown', handleEscClose);
};
const handleOpenProfile = () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formValidators['popup__form'].resetValidation();
  openPopup(profilePopupContainer);
};
const handleSubmitProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(profilePopupContainer);
};
const handleOpenCard = (data) => {
  popupImage.src = data.link;
  popupImage.alt = data.name;
  popupCaption.textContent = data.name;
  openPopup(imagePopupContainer);
};
const handleOpenAddCardPopup = () => {
  cardAddForm.reset();
  formValidators['add__form'].resetValidation();
  openPopup(cardPopupContainer);
};
const handleAddCard = (evt) => {
  evt.preventDefault();
  const newCard = getNewCard({
    name: titleInput.value,
    link: linkInput.value,
  });
  cardsContainer.prepend(newCard);
  closePopup(cardPopupContainer);
};
const handleClosePopup = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
};
const handleEscClose = (evt) => {
  const escCode = 'Escape';
  if (evt.key === escCode) {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    closePopup(popupIsOpened);
  }
};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);
profileEditButton.addEventListener('click', handleOpenProfile);
profileEditForm.addEventListener('submit', handleSubmitProfile);
cardAddButton.addEventListener('click', handleOpenAddCardPopup);
cardAddForm.addEventListener('submit', handleAddCard);
getCardsList(initialCards);
