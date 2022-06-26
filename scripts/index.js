const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const profileAddButton = document.querySelector('.profile__add-button');
const placespic = document.querySelector('.places__pic');

const popupPlaces = document.querySelector('.popup__places');




let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_position');


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
profileAddButton.addEventListener('click', openPopup);
placespic.addEventListener('click', openPopup);




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



/*добавление карточек*/

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'

    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const placesContainer = document.querySelector('.places');
const placesTemplate = document.querySelector('#places-template').content;

const placeInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});

function render() {
    placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
    const placesElement = placesTemplate.querySelector('.places__gallery').cloneNode(true);
    placesElement.querySelector('.places__name').textContent = name;
    placesElement.querySelector('.places__pic').src = link;
    placesContainer.prepend(placesElement);
    setEventListeners(placesElement);
    placesElement.querySelector('.places__like-ico').addEventListener('click', function (evt) {
    evt.target.classList.toggle('places__like-ico-activ'); 
    });

};

render();

/*удаление карточки*/

function handleDelete(evt) {
    evt.target.closest('.places__gallery').remove();
};

function setEventListeners(placesElement) {
    const deleteButton = placesElement.querySelector('.places__delete');
    deleteButton.addEventListener('click',  handleDelete);
};

/*попап добавления картинок*/




