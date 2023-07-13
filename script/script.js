let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__page')
let edit = document.querySelector('.profile__edit-button');
let popupName = document.querySelector('.popup__text:first-of-type');
let popupHobby = document.querySelector('.popup__text:last-of-type');
let profileName = document.querySelector('.profile__name');
let profileHobby = document.querySelector('.profile__hobby');

function openPopup(){
    popup.classList.toggle('popup_active');
    popupName.value = profileName.textContent;
    popupHobby.value = profileHobby.textContent;
}
function handleFormSubmit(evt){
    evt.preventDefault()
    popup.classList.toggle('popup_active');
    profileName.textContent = popupName.value;
    profileHobby.textContent = popupHobby.value;
}
save.addEventListener('submit',handleFormSubmit);
edit.addEventListener('click',openPopup);
close.addEventListener('click',openPopup);