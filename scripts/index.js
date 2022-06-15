const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function openPopup(event) {
    popup.classList.add('popup_opened');

}

function closePopup(event) {
    popup.classList.remove('popup_opened');
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

    closeEditForm()

};


formElement.addEventListener('submit', formSubmitHandler);





/*1 вариант
function qs(selector) {
    return document.querySelector(selector);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    qs('.profile__title').textContent = qs('.popup__input_text_name').value;
    qs('.profile__subtitle').textContent = qs('.popup__input_text_position').value;
    closeEditForm()
}

function closeEditForm() { }
formElement.addEventListener('submit', formSubmitHandler);*/