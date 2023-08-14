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
const cardsTemplate = document.querySelector('#cards').content;
const cardsContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_img')
const buttonCloseImage = document.querySelector('.popup__close_img');
const popupCard = popupImage.querySelector('.popup__card');
const popupTextImg = popupImage.querySelector('.popup__text_img');
const popupList = document.querySelectorAll('.popup');

function createCard(name,image){
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
    openPopup(popupImage);
    popupCard.src = picture.src;
    popupTextImg.textContent = text.textContent;
    popupCard.alt = picture.alt;
  })
  return newCardsTemplate;
};
function openPopup(popup){
  popup.classList.add('popup_active');
  setClosePopupByEscListener();
}
function closePopup(popup){
  popup.classList.remove('popup_active');
  removeClosePopupByEscListener();
}
function openEditPopup(){
  openPopup(popupEdit);
  deleteErrorMessages(popupFormEdit);
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
  const inputList = Array.from(popupFormEdit.querySelectorAll(validationConfig['inputSelector']));
  const buttonElement = popupFormEdit.querySelector(validationConfig['submitButtonSelector']);
  toggleButtonState(inputList,buttonElement,validationConfig);
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
  addCard(createCard(picName,picImage));  
  closePopup(popupAdd);
  pictureNameAdd.value = '';
  pictureLinkAdd.value = '';
}
function closeAllPopups(){
  const popups = document.querySelector('.popup_active')
    closePopup(popups);
  }
const deleteErrorMessages = (formElement) =>{
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  inputList.forEach((inputElement) =>{
    hideInputError(formElement,inputElement,validationConfig);
    })
}
const addEventListenerEsc = (evt) =>{
  if (evt.key ==='Escape'){
    closeAllPopups();
}
}
const removeClosePopupByEscListener = () =>{
  document.removeEventListener('keydown',addEventListenerEsc);
}
const setClosePopupByEscListener = () => {
  document.addEventListener('keydown',addEventListenerEsc);
}
initialCards.forEach(function(element){
 addCard(createCard(element['name'],element['link']));
});
const deactivateAddButton = (formElement,validationConfig) =>{
  const buttonElement = formElement.querySelector(validationConfig['submitButtonSelector'])
  buttonElement.classList.add(validationConfig['inactiveButtonClass']);
  buttonElement.setAttribute('disabled',true);
}
buttonAdd.addEventListener('click',() => {
  openPopup(popupAdd);
  deleteErrorMessages(popupFormAdd);
  deactivateAddButton(popupFormAdd,validationConfig);
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
        closeAllPopups();
  }
}
})
})
