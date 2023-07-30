const popupEdit = document.querySelector('.popup');
const buttonCloseEdit = document.querySelector('.popup__close');
const buttonSaveEdit = document.querySelector('.popup__form');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__text_name');
const popupHobby = document.querySelector('.popup__text_hobby');
const popupAdd = document.querySelector('.popup_add');
const buttonCloseAdd = popupAdd.querySelector('.popup__close_add');
const buttonSaveAdd = document.querySelector('.popup__form_add')
const pictureNameAdd = document.querySelector('.popup__text_pic-name');
const pictureLinkAdd = document.querySelector('.popup__text_pic');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const cardsTemplate = document.querySelector('#cards').content;
const cards = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_img')
const buttonCloseImage = document.querySelector('.popup__close_img');

function changeVar(a,b){
  const newCardsTemplate = cardsTemplate.querySelector('.elements__element').cloneNode(true);
  const text = newCardsTemplate.querySelector('.elements__text');
  const picture = newCardsTemplate.querySelector('.elements__image');
  const alternate = newCardsTemplate.querySelector('.elements__image');
  text.textContent = a;
  alternate.alt = a;
  picture.src = b;
  newCardsTemplate.querySelector('.elements__button').addEventListener('click',function(evt){
    evt.target.classList.toggle('elements__button_active');
  })

  newCardsTemplate.querySelector('.elements__trash').addEventListener('click',function(evt){
    newCardsTemplate.remove();
  })
  newCardsTemplate.querySelector('.elements__image-button').addEventListener('click',function(evt){
    addPopup(popupImage);
    const popupCard = popupImage.querySelector('.popup__card');
    const popupTextImg = popupImage.querySelector('.popup__text_img');
    const elementsImage = newCardsTemplate.querySelector('.elements__image');
    const elementsText = newCardsTemplate.querySelector('.elements__text');
    popupCard.src = elementsImage.src;
    popupTextImg.textContent = elementsText.textContent;
  })
  cards.prepend(newCardsTemplate);
};
function addPopup(evt){
  evt.classList.add('popup_active');
}
function closePopup(evt){
  evt.classList.remove('popup_active');
}
function openPopup(){
  addPopup(popupEdit);
    popupName.value = profileName.textContent;
    popupHobby.value = profileHobby.textContent;
}
function editCardHandleFormSubmit(evt){
    evt.preventDefault()
    closePopup(popupEdit)
    profileName.textContent = popupName.value;
    profileHobby.textContent = popupHobby.value;
}
function addCardHandleFormSubmit(evt){
  evt.preventDefault()
  const picName = pictureNameAdd.value;
  const picImage = pictureLinkAdd.value;
  changeVar(picName,picImage);  
  closePopup(popupAdd);
  pictureNameAdd.value = '';
  pictureLinkAdd.value = '';
}
initialCards.forEach(function(element){
  changeVar(element['name'],element['link']);
}); 
buttonAdd.addEventListener('click',() => addPopup(popupAdd));
buttonCloseAdd.addEventListener('click',() => closePopup(popupAdd));
buttonSaveEdit.addEventListener('submit',editCardHandleFormSubmit);
buttonEdit.addEventListener('click',openPopup);
buttonCloseEdit.addEventListener('click',() => closePopup(popupEdit));
buttonCloseImage.addEventListener('click',() => closePopup(popupImage));
buttonSaveAdd.addEventListener('submit',addCardHandleFormSubmit);