import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
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
  profileAvatarButton,
  confirmPopupSelector,
  avatarPopupSelector,
  formValidators,
} from '../scripts/constants/constants.js';
const addNewCard = (cardInfo) => {
  return new Card(
    cardInfo,
    cardTemplateSelector,
    handleCardClick,
    handleRemove,
    toggleLike,
    userInfo.userId
  ).generateCard();
};
const handleSubmitProfile = (formValues) => {
  profilePopup.loading(true);
  api
    .setProfileInfo(formValues)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopup.loading(false, 'Сохранить'));
};
const handleSubmitCard = (formValues) => {
  cardAddPopup.loading(true);
  api
    .addCard(formValues)
    .then((res) => {
      cardsList.addItem(res);
      cardAddPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => cardAddPopup.loading(false, 'Cоздать'));
};
const handleConfirm = (targetCard) => {
  api
    .removeCard(targetCard.getCardId())
    .then(() => {
      targetCard.handleRemoveCard();
      confirmPopup.close();
    })
    .catch((err) => console.log(err));
};
const handleSubmitAvatar = (formValues) => {
  avatarPopup.loading(true);
  api
    .setAvatar(formValues)
    .then((res) => {
      userInfo.setUserInfo(res);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      avatarPopup.loading(false, 'Сохранить');
    });
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
const handleCardClick = ({ name, link }) => {
  imagePopup.open({ name, link });
};
const handleRemove = (card) => {
  confirmPopup.open(card);
};
const toggleLike = (card) => {
  if (card.isLiked()) {
    api
      .removeLike(card.getCardId())
      .then((res) => {
        card.setLike(res);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .addLike(card.getCardId())
      .then((res) => {
        card.setLike(res);
      })
      .catch((err) => console.log(err));
  }
};
const openProfilePopup = () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  formValidators['profile__form'].resetValidation();
  profilePopup.open();
};
const openCardAddPopup = () => {
  formValidators['add__form'].resetValidation();
  cardAddPopup.open();
};
const openAvatarPopup = () => {
  formValidators['avatar__form'].resetValidation();
  avatarPopup.open();
};
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43/',
  headers: {
    authorization: '3561314d-9c6f-4e96-b81e-d301e13da90c',
    'Content-Type': 'application/json',
  },
});
const cardsList = new Section(addNewCard, cardsContainerSelector);
const userInfo = new UserInfo({
  userName: profileNameSelector,
  userAbout: profileAboutSelector,
  userAvatar: profileAvatarSelector,
});
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([profileInfo, cards]) => {
    userInfo.setUserInfo(profileInfo);
    cardsList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
const profilePopup = new PopupWithForm(handleSubmitProfile, profileEditPopupSelector);
const cardAddPopup = new PopupWithForm(handleSubmitCard, cardAddPopupSelector);
const imagePopup = new PopupWithImage(imagePopupSelector);
const confirmPopup = new PopupWithConfirmation(handleConfirm, confirmPopupSelector);
const avatarPopup = new PopupWithForm(handleSubmitAvatar, avatarPopupSelector);
profileEditButton.addEventListener('click', openProfilePopup);
cardAddButton.addEventListener('click', openCardAddPopup);
profileAvatarButton.addEventListener('click', openAvatarPopup);
enableValidation(config);
profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();
