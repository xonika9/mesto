const imagePopupSelector = '.popup_type_image';
const profilePopupSelector = '.popup_type_edit-profile';
const cardPopupSelector = '.popup_type_add-card';
const profileName = '.profile__name';
const profileAbout = '.profile__about';

const imagePopupContainer = document.querySelector('.popup_type_image');
const profilePopupContainer = document.querySelector('.popup_type_edit-profile');
const cardPopupContainer = document.querySelector('.popup_type_add-card');

const popupImage = imagePopupContainer.querySelector('.popup__image');
const popupCaption = imagePopupContainer.querySelector('.popup__caption');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = profilePopupContainer.querySelector('.popup__input_type_name');
const aboutInput = profilePopupContainer.querySelector('.popup__input_type_about');
const profileEditForm = profilePopupContainer.querySelector('.popup__form');
const cardAddButton = document.querySelector('.profile__add-button');
const titleInput = cardPopupContainer.querySelector('.popup__input_type_card-title');
const linkInput = cardPopupContainer.querySelector('.popup__input_type_image-link');
const cardAddForm = cardPopupContainer.querySelector('.popup__form');
const cardsContainer = '.elements';
const cardTemplate = document.querySelector('.card__template');
const formValidators = {};
export {
  imagePopupSelector,
  profilePopupSelector,
  cardPopupSelector,
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
};
