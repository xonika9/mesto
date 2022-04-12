const initialCards = [
  {
    name: 'Каньон Антилопы',
    link: 'https://i.imgur.com/5tEtE4H.jpg',
  },
  {
    name: 'Фаро',
    link: 'https://i.imgur.com/SoPTyZC.jpg',
  },
  {
    name: 'Большой каньон',
    link: 'https://i.imgur.com/uRqdyEn.jpg',
  },
  {
    name: 'Парати',
    link: 'https://i.imgur.com/W2LiFmb.jpg',
  },
  {
    name: 'Сан-Франциско',
    link: 'https://i.imgur.com/KQvphbw.jpg',
  },
  {
    name: 'Ферма Wooden Shoe',
    link: 'https://i.imgur.com/hqnHN3f.jpg',
  },
];
const popupOpenButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const modalWindow = document.querySelector('.popup');
const editForm = modalWindow.querySelector('.popup__form');
const nameInput = modalWindow.querySelector('.popup__input_type_name');
const aboutInput = modalWindow.querySelector('.popup__input_type_about');
const submitButton = modalWindow.querySelector('.popup__submit-button');
const popupCloseButton = modalWindow.querySelector('.popup__close-button');
function toggleModalWindow() {
  modalWindow.classList.toggle('popup_is-opened');
}
function openPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  toggleModalWindow();
}
function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  toggleModalWindow();
}
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', toggleModalWindow);
editForm.addEventListener('submit', editProfile);
