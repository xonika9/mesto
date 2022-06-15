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
const cardTemplate = document.querySelector('.card__template');
const formValidators = {};
export {
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
