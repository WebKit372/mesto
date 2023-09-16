export const initialCards = [
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
      name: 'Ernest Khalimov',
      link: 'https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg'
    }
  ];
export const buttonEdit = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('#name-input');
export const hobbyInput = document.querySelector('#hobby-input');
export const buttonAdd = document.querySelector('.profile__add-button');
export const validationConfig ={
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__form-input-error_active'
}; 
export const popupAddForm = document.querySelector('.popup_add');
export const popupEditForm = document.querySelector('.popup_edit');