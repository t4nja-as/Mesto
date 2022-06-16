const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
function openPopup() {
    popup.classList.add('popup_opened');

}

let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__input_text_name');
    let jobInput = document.querySelector('.popup__input_text_position');
    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
};

function closePopup() {
    popup.classList.remove('popup_opened')
};


formElement.addEventListener('submit', formSubmitHandler);

