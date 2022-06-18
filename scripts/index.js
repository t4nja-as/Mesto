const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_position');

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
};

let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup()
};

function closePopup() {
    popup.classList.remove('popup_opened')
};


formElement.addEventListener('submit', formSubmitHandler);
