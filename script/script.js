import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { validationConfig } from "./FormValidator.js";
import { FormValidator } from "./FormValidator.js";
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEdit = document.querySelector('.popup__close_edit');
const popupFormEdit = document.querySelector('.popup__form_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__text_name');
const popupHobby = document.querySelector('.popup__text_hobby');
const popupAdd = document.querySelector('.popup_add');
const buttonCloseAdd = popupAdd.querySelector('.popup__close_add');
const popupFormAdd = document.querySelector('.popup__form_add')
const pictureNameAdd = document.querySelector('.popup__text_pic-name');
const pictureLinkAdd = document.querySelector('.popup__text_pic');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const cardsContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_img')
const buttonCloseImage = document.querySelector('.popup__close_img');
const popupList = document.querySelectorAll('.popup');

class FormValidatorPopup extends FormValidator{
  deleteErrorMessages(){
    super._toggleButtonState()
    this._inputList.forEach((inputElement) =>{
      this._hideInputError(inputElement)
    })
  }
}
const validatorEditProfile = new FormValidatorPopup(validationConfig,popupEdit);
const validatorAddCard = new FormValidatorPopup(validationConfig,popupAdd);
validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();
const createCard = (text,image,templateSelector,openPopup) =>{
  const cardNew = new Card(text,image,templateSelector,openPopup);
  const newCard = cardNew.generateCard()
  addCard(newCard);
}
initialCards.forEach(function(element){
  createCard(element['name'],element['link'],'#cards',openPopup);
 });
function openPopup(popup){
  popup.classList.add('popup_active');
  setClosePopupByEscListener();
}
function closePopup(popup){
  popup.classList.remove('popup_active');
  removeClosePopupByEscListener();
}
function openEditPopup(){
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
  validatorEditProfile.deleteErrorMessages();
  openPopup(popupEdit);
}
function handleEditProfileFormSubmit(evt){
    evt.preventDefault()
    closePopup(popupEdit)
    profileName.textContent = popupName.value;
    profileHobby.textContent = popupHobby.value;
}
function addCard(template){
  cardsContainer.prepend(template)
}
function handleAddCardFormSubmit(evt){
  evt.preventDefault()
  const picName = pictureNameAdd.value;
  const picImage = pictureLinkAdd.value;
  createCard(picName,picImage,'#cards',openPopup); 
  closePopup(popupAdd);
  popupFormAdd.reset()
}
function closeOpenedPopup(){
  const openedPopup = document.querySelector('.popup_active')
    closePopup(openedPopup);
}

const closePopupByEsc = (evt) =>{
  if (evt.key ==='Escape'){
    closeOpenedPopup();
  }
}
const removeClosePopupByEscListener = () =>{
  document.removeEventListener('keydown',closePopupByEsc);
}
const setClosePopupByEscListener = () => {
  document.addEventListener('keydown',closePopupByEsc);
}
buttonAdd.addEventListener('click',() => {
  openPopup(popupAdd);
  validatorAddCard.deleteErrorMessages();
});
buttonCloseAdd.addEventListener('click',() => closePopup(popupAdd));
popupFormEdit.addEventListener('submit',handleEditProfileFormSubmit);
buttonEdit.addEventListener('click',openEditPopup);
buttonCloseEdit.addEventListener('click',() => closePopup(popupEdit));
buttonCloseImage.addEventListener('click',() => closePopup(popupImage));
popupFormAdd.addEventListener('submit',handleAddCardFormSubmit);
popupList.forEach(popup =>{
  popup.addEventListener('mousedown',function(evt){
    const popupCheck = evt.target.classList.contains('popup')
    if (document.querySelector('.popup_active')){
      if (popupCheck){
        closeOpenedPopup();
      }
    }
  })
})

