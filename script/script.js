let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close');
let save = document.querySelector('.popup__form')
let savePic = document.querySelector('.popup__form_add')
let namePic = document.querySelector('.popup__text_add:first-of-type');
let Pic = document.querySelector('.popup__text_add:last-of-type');
let edit = document.querySelector('.profile__edit-button');
let popupName = document.querySelector('.popup__text:first-of-type');
let popupHobby = document.querySelector('.popup__text:last-of-type');
let profileName = document.querySelector('.profile__name');
let profileHobby = document.querySelector('.profile__hobby');
const cardsTemplate = document.querySelector('#cards').content;
const cards = document.querySelector('.elements');
let addButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup_add');
let closeAdd = popupAdd.querySelector('.popup__close');
let popupImg = document.querySelector('.popup-img')
let closeImg = document.querySelector('.popup-img__close');
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
const initialCardsNew=[];
initialCards.forEach(function(element){
    const newCardsTemplate = cardsTemplate.querySelector('.elements__element').cloneNode(true);
    const temp = newCardsTemplate;
    temp.querySelector('.elements__image').src = element['link'];
    temp.querySelector('.elements__text').textContent = element['name'];
    initialCardsNew.push(temp);
}); 
initialCardsNew.forEach(function(pop){
    const elem = pop;
    elem.querySelector('.elements__button').addEventListener('click',function(evt){
      evt.target.classList.toggle('elements__button_active');
    })
    elem.querySelector('.elements__trash').addEventListener('click',function(evt){
      elem.remove();
    })
    elem.querySelector('.elements__image-button').addEventListener('click',function(evt){
      popupImg.classList.toggle('popup-img_active');
      popupImg.querySelector('.popup-img__img').src = elem.querySelector('.elements__image').src;
      popupImg.querySelector('.popup-img__text').textContent = elem.querySelector('.elements__text').textContent;
    })
    cards.prepend(elem);
})

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
    console.log(save);
}
function closePopup(){
    popup.classList.toggle('popup_active');
}
function closePopupImg(){
  popupImg.classList.toggle('popup-img_active');
}
function closePopupAdd(){
    popupAdd.classList.toggle('popup_active');
}
function openPopupAdd(){
    popupAdd.classList.toggle('popup_active');
}
function addCard(evt){
   evt.preventDefault()
   popupAdd.classList.toggle('popup_active');
   const addCardTemplate = cardsTemplate.querySelector('.elements__element').cloneNode(true);
   addCardTemplate.querySelector('.elements__image').src = Pic.value;
   addCardTemplate.querySelector('.elements__text').textContent = namePic.value;
   popupHobby.value = profileHobby.textContent;
   addCardTemplate.querySelector('.elements__button').addEventListener('click',function(evt){
    evt.target.classList.toggle('elements__button_active');
  })
  addCardTemplate.querySelector('.elements__trash').addEventListener('click',function(evt){
    addCardTemplate.remove();
  })
  addCardTemplate.querySelector('.elements__image-button').addEventListener('click',function(evt){
    popupImg.classList.toggle('popup-img_active');
    popupImg.querySelector('.popup-img__img').src = addCardTemplate.querySelector('.elements__image').src;
    popupImg.querySelector('.popup-img__text').textContent = addCardTemplate.querySelector('.elements__text').textContent;
  })
  Pic.value = '';
  namePic.value = '';
  cards.prepend(addCardTemplate);
}
addButton.addEventListener('click',openPopupAdd);
closeAdd.addEventListener('click',closePopupAdd);
save.addEventListener('submit',handleFormSubmit);
savePic.addEventListener('submit',addCard);
edit.addEventListener('click',openPopup);
close.addEventListener('click',closePopup);
closeImg.addEventListener('click',closePopupImg);