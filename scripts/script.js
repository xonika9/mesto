const openButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const modalWindow = document.querySelector(".popup");
const editForm = modalWindow.querySelector(".popup__form");
const nameInput = modalWindow.querySelector(".popup__input_type_name");
const aboutInput = modalWindow.querySelector(".popup__input_type_about");
const submitButton = modalWindow.querySelector(".popup__submit-button");
const closeButton = modalWindow.querySelector(".popup__close-button");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_is-opened");
}

function openPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  toggleModalWindow();
}

openButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", toggleModalWindow);

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  toggleModalWindow();
}

editForm.addEventListener("submit", editProfile);