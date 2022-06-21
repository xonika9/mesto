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
  imagePopupSelector,
  profileEditPopupSelector,
  cardAddPopupSelector,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  cardsContainerSelector,
  cardTemplateSelector,
  profileEditButton,
  cardAddButton,
  confirmPopupSelector,
  avatarPopupSelector,
} from '../scripts/constants/constants.js';
const addNewCard = ({ title, link }) => {
  const cardElement = new Card(
    { title, link },
    cardTemplateSelector,
    handleCardClick
  ).generateCard();

  cardsList.addItem(cardElement);
};
const handleOpenProfile = () => {
  profileEditPopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profileEditPopup.open();
};
const handleSubmitProfile = (formValues) => {
  userInfo.setUserInfo(formValues);
};
const handleOpenCardAddPopup = () => {
  cardFormValidator.resetValidation();
  cardAddPopup.open();
};
const handleSubmitCard = (formValues) => {
  addNewCard(formValues);
};
const handleCardClick = ({ title, link }) => {
  showCardPopup.open({ title, link });
};
const profileEditPopup = new PopupWithForm(handleSubmitProfile, profileEditPopupSelector);
profileEditPopup.setEventListeners();
const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
const userInfo = new UserInfo({
  userName: profileNameSelector,
  userAbout: profileAboutSelector,
});
cardAddPopup.setEventListeners();
const showCardPopup = new PopupWithImage(imagePopupSelector);
showCardPopup.setEventListeners();
const cardFormValidator = new FormValidator(config, cardAddPopup.form);
const profileFormValidator = new FormValidator(config, profileEditPopup.form);
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      addNewCard(item);
    },
  },
  cardsContainerSelector
);
profileEditButton.addEventListener('click', handleOpenProfile);
cardAddButton.addEventListener('click', handleOpenCardAddPopup);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardsList.renderItems();
