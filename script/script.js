const popup = document.querySelector('.popup');
const popupPage = document.querySelector('.popup__page');
const buttonCloseEdit = document.querySelector('.popup__close');
const popupFormEdit = document.querySelector('.popup__form');
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
const popupCard = popupImage.querySelector('.popup__card');
const popupTextImg = popupImage.querySelector('.popup__text_img');

function createNewCardTemplate(name,image){
  const newCardsTemplate = cardsTemplate.querySelector('.elements__element').cloneNode(true);
  const text = newCardsTemplate.querySelector('.elements__text');
  const picture = newCardsTemplate.querySelector('.elements__image');
  text.textContent = name;
  picture.alt = name;
  picture.src = image;
  newCardsTemplate.querySelector('.elements__button').addEventListener('click',function(evt){
    evt.target.classList.toggle('elements__button_active');
  })

  newCardsTemplate.querySelector('.elements__trash').addEventListener('click',function(evt){
    newCardsTemplate.remove();
  })
  newCardsTemplate.querySelector('.elements__image-button').addEventListener('click',function(evt){
    addPopup(popupImage);
    popupCard.src = picture.src;
    popupTextImg.textContent = text.textContent;
    popupCard.alt = picture.alt;
  })
  return(newCardsTemplate);
};
function addPopup(popup){
  popup.classList.add('popup_active');
  openPopupByEsc();
}
function closePopup(popup){
  const formElement = document.querySelector('.popup_active');
  if (formElement){
  if (formElement.querySelector('.popup__form')){
    deleteErrorMessages(formElement);}
  }
  popup.classList.remove('popup_active');
  closePopupByEsc();
}
function openEditPopup(){
  addPopup(popup);
    popupName.value = profileName.textContent;
    popupHobby.value = profileHobby.textContent;
}
function editCardHandleFormSubmit(evt){
    evt.preventDefault()
    closePopup(popup)
    profileName.textContent = popupName.value;
    profileHobby.textContent = popupHobby.value;
}
function addCard(template){
  cards.prepend(template)
}
function addCardHandleFormSubmit(evt){
  evt.preventDefault()
  const picName = pictureNameAdd.value;
  const picImage = pictureLinkAdd.value;
  addCard(createNewCardTemplate(picName,picImage));  
  closePopup(popupAdd);
  pictureNameAdd.value = '';
  pictureLinkAdd.value = '';
}
function closeAllPopups(){
  const popups = document.querySelectorAll('.popup')
  popups.forEach(function(element){
    closePopup(element)
  })
}
const deleteErrorMessages = (formElement) =>{
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  inputList.forEach((inputElement) =>{
    hideInputError(formElement,inputElement);
    })
}
const addEventListenerEsc = (evt) =>{
  const formElement = document.querySelector('.popup_active');
  if (evt.key =='Escape'){
    closeAllPopups();
    if (formElement.querySelector('.popup__form')){
      deleteErrorMessages(formElement);
  }
}
}
const closePopupByEsc = () =>{
  document.removeEventListener('keydown',addEventListenerEsc);
}
const openPopupByEsc = () => {
  document.addEventListener('keydown',addEventListenerEsc);
}
initialCards.forEach(function(element){
 addCard(createNewCardTemplate(element['name'],element['link']));
}); 
buttonAdd.addEventListener('click',() => addPopup(popupAdd));
buttonCloseAdd.addEventListener('click',() => closePopup(popupAdd));
popupFormEdit.addEventListener('submit',editCardHandleFormSubmit);
buttonEdit.addEventListener('click',openEditPopup);
buttonCloseEdit.addEventListener('click',() => closePopup(popup));
buttonCloseImage.addEventListener('click',() => closePopup(popupImage));
buttonSaveAdd.addEventListener('submit',addCardHandleFormSubmit);
document.addEventListener('mousedown',function(evt){
  const popupCheck = evt.target.classList.contains('popup')
  if (document.querySelector('.popup_active')){
  const formElement = document.querySelector('.popup_active');
    if (popupCheck){
      closeAllPopups();
      if (formElement.querySelector('.popup__form')){
        deleteErrorMessages(formElement);
    }
    }
  }
});
