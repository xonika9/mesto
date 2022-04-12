const initialCards = [
  {
    name: 'Каньон Антилопы',
    link: 'https://images.unsplash.com/photo-1648405680499-ab4153bc7be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Фаро',
    link: 'https://images.unsplash.com/photo-1647897478739-7e5e6a31c7f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
  {
    name: 'Большой каньон',
    link: 'https://images.unsplash.com/photo-1648405680438-48bee6bfee72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Парати',
    link: 'https://images.unsplash.com/photo-1647971450227-650677ca99cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Сан-Франциско',
    link: 'https://images.unsplash.com/photo-1647748918847-b72cf7d2908c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Ферма Wooden Shoe',
    link: 'https://images.unsplash.com/photo-1554261197-de743c7e0ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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

const elementsContainer = document.querySelector('.elements');
const template = document.querySelector('.card__template');

function render() {
  const elementsList = initialCards.map(getElement);
  elementsContainer.append(...elementsList);
  return elementsContainer;
}

function getElement(item) {
  const newCard = template.content.cloneNode(true);
  const title = newCard.querySelector('.card__title');
  const image = newCard.querySelector('.card__photo');
  const removeButton = newCard.querySelector('.card__remove');

  title.textContent = item.name;
  image.src = item.link;
  image.alt = item.name;

  removeButton.addEventListener('click', handleRemoveElement);

  return newCard;
}

function handleRemoveElement(evt) {
  const element = evt.target.closest('.card');
  element.remove();
}

function handleAddElement() {
  const element = getElement({ title: input.value });
  listContainer.prepend(element);
  input.value = '';
}

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

render();
