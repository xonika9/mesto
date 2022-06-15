import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import initialCards from '../scripts/constants/cards.js';
import config from '../scripts/constants/config.js';
import {
  imagePopupContainer,
  popupImage,
  popupCaption,
  profilePopupContainer,
  profileEditButton,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  profileEditForm,
  cardPopupContainer,
  cardAddButton,
  titleInput,
  linkInput,
  cardAddForm,
  cardsContainer,
  formValidators,
  cardTemplate,
} from '../scripts/constants/constants.js';

console.log('profilePopupContainer:' + profilePopupContainer);
console.log('cardPopupContainer:' + cardPopupContainer);
console.log('imagePopupContainer:' + imagePopupContainer);

const getNewCard = (item) => {
  return new Card(item, '.card__template', imagePopup.open).generateCard();
};
const userInfo = new UserInfo(profileName, profileAbout);
const profileEditPopup = new PopupWithForm(profilePopupContainer, handleSaveProfile);
const cardAddPopup = new PopupWithForm(cardPopupContainer, handleCreateNewCard);
const imagePopup = new PopupWithImage(imagePopupContainer, config);
const formAddValidator = new FormValidator(config, cardAddPopup.getForm());
const formEditValidator = new FormValidator(config, profileEditPopup.getForm());
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(getNewCard(item));
    },
  },
  '.elements'
);

const handleEditProfile = () => {
  const userObject = userInfo.getUserInfo();
  nameInput.value = userObject.name;
  aboutInput.value = userObject.data;
  formEditValidator.resetValidation();
  profileEditPopup.open();
};
const handleAddNewCard = () => {
  formAddValidator.resetValidation();
  cardAddPopup.open();
};
const handleCreateNewCard = (e, inputValues) => {
  e.preventDefault();
  cardsList.addItem(
    getNewCard({
      name: inputValues['card-title'],
      link: inputValues['image-link'],
    })
  );
};
const handleSaveProfile = (e, inputValues) => {
  e.preventDefault();

  userInfo.setUserInfo({
    name: inputValues['name'],
    about: inputValues['about'],
  });
};
cardsList.renderItems();
profileEditButton.addEventListener('click', handleEditProfile);
cardAddButton.addEventListener('click', handleAddNewCard);
profileEditPopup.setEventsListeners();
cardAddPopup.setEventsListeners();
imagePopup.setEventsListeners();
formAddValidator.enableValidation();
formEditValidator.enableValidation();

// my old working code
// const getNewCard = (item) => {
//   return new Card(item, '.card__template', handleOpenCard).generateCard();
// };
// const getCardsList = () => {
//   initialCards.forEach((item) => {
//     const cardElement = getNewCard(item);
//     cardsContainer.append(cardElement);
//   });
//   return cardsContainer;
// };
// const openPopup = (modalWindow) => {
//   modalWindow.classList.add('popup_is-opened');
//   modalWindow.addEventListener('mousedown', handleClosePopup);
//   document.addEventListener('keydown', handleEscClose);
// };
// const closePopup = (modalWindow) => {
//   modalWindow.classList.remove('popup_is-opened');
//   modalWindow.removeEventListener('mousedown', handleClosePopup);
//   document.removeEventListener('keydown', handleEscClose);
// };
// const handleOpenProfile = () => {
//   nameInput.value = profileName.textContent;
//   aboutInput.value = profileAbout.textContent;
//   formValidators['popup__form'].resetValidation();
//   openPopup(profilePopupContainer);
// };
// const handleSubmitProfile = (evt) => {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileAbout.textContent = aboutInput.value;
//   closePopup(profilePopupContainer);
// };
// const handleOpenCard = (data) => {
//   popupWithImage.src = data.link;
//   popupWithImage.alt = data.name;
//   popupCaption.textContent = data.name;
//   openPopup(imagePopupContainer);
// };
// const handleOpenAddCardPopup = () => {
//   cardAddForm.reset();
//   formValidators['add__form'].resetValidation();
//   openPopup(cardPopupContainer);
// };
// const handleAddCard = (evt) => {
//   evt.preventDefault();
//   const newCard = getNewCard({
//     name: titleInput.value,
//     link: linkInput.value,
//   });
//   cardsContainer.prepend(newCard);
//   closePopup(cardPopupContainer);
// };
// const handleClosePopup = (evt) => {
//   if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
//     closePopup(evt.currentTarget);
//   }
// };
// const handleEscClose = (evt) => {
//   const escCode = 'Escape';
//   if (evt.key === escCode) {
//     const popupIsOpened = document.querySelector('.popup_is-opened');
//     closePopup(popupIsOpened);
//   }
// };
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(config, formElement);
//     const formName = formElement.getAttribute('name');
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// enableValidation(config);
// profileEditButton.addEventListener('click', handleOpenProfile);
// profileEditForm.addEventListener('submit', handleSubmitProfile);
// cardAddButton.addEventListener('click', handleOpenAddCardPopup);
// cardAddForm.addEventListener('submit', handleAddCard);
// getCardsList(initialCards);
