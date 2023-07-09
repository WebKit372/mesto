let open = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__save')
let edit = document.querySelector('.profile__edit-button');
let popup__name = document.querySelector('.popup__name');
let popup__hobby = document.querySelector('.popup__hobby');
let profile__name = document.querySelector('.profile__name');
let profile__hobby = document.querySelector('.profile__hobby');
let like__button = document.querySelectorAll('.elements__button')
let elements = document.querySelector('.elements');
let footer = document.querySelector('.footer');

function openPopup(){
    popup.classList.toggle('popup_active');
    popup__name.setAttribute('placeholder',profile__name.textContent);
    popup__hobby.setAttribute('placeholder',profile__hobby.textContent);
}
function editPopup(){
    popup.classList.toggle('popup_active');
    profile__name.textContent = popup__name.value;
    profile__hobby.textContent = popup__hobby.value;
}
save.addEventListener('click',editPopup);
edit.addEventListener('click',openPopup);
close.addEventListener('click',openPopup);