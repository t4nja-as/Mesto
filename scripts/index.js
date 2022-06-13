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
console.log(profileEditButton)
