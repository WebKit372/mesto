export const initialCards = [];
export const buttonEdit = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('#name-input');
export const hobbyInput = document.querySelector('#hobby-input');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatarUpdate = document.querySelector('.profile__avatar-button');
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
export const formValidators ={}
// export const options = {
//   cardsURL: 'https://mesto.nomoreparties.co/v1/cohort-76/cards',
//   token:'b0ea76b3-fb9e-4d05-abdf-ca4cd807d2db'
// }
export const apiOptions ={
    CardsOption:{
      URL:'https://mesto.nomoreparties.co/v1/cohort-76/cards',
      token:'b0ea76b3-fb9e-4d05-abdf-ca4cd807d2db'
    },
    ProfileOption:{
      URL:'https://mesto.nomoreparties.co/v1/cohort-76/users/me',
      token:'b0ea76b3-fb9e-4d05-abdf-ca4cd807d2db'
    }
}
// fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
// headers: {
//   authorization: 'b0ea76b3-fb9e-4d05-abdf-ca4cd807d2db'
// }
// })
// .then(res => res.json())
// .then((result) => {
//   result.forEach((e)=>{
//     initialCards.push(e) 
//   })
//   });
// fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
//   headers: {
//     authorization: 'b0ea76b3-fb9e-4d05-abdf-ca4cd807d2db'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 