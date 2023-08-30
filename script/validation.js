export const validationConfig ={
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__form-input-error_active'
}; 
// const disableSubmitButton = (buttonElement,validationConfig) =>{
//   buttonElement.classList.add(validationConfig['inactiveButtonClass']);
//   buttonElement.setAttribute('disabled',true);
// }
// const hasInvalidInput = (inputList) =>{
//   return inputList.some((inputElement)=>{
//     return !inputElement.validity.valid;
//   })
// }
// const toggleButtonState = (inputList,buttonElement,validationConfig) =>{
//   if (hasInvalidInput(inputList)){
//     disableSubmitButton(buttonElement,validationConfig);
//   }
//   else{
//     buttonElement.classList.remove(validationConfig['inactiveButtonClass']);
//     buttonElement.removeAttribute('disabled');
//   }
// }
// const showInputError= (formElement,inputElement,errorMessage,validationConfig) => {
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(validationConfig['inputErrorClass']);
//   formError.textContent = errorMessage;
//   formError.classList.add(validationConfig['errorClass']);
// }
// const hideInputError = (formElement,inputElement,validationConfig) =>{
//   const formError = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(validationConfig['inputErrorClass']);
//   formError.textContent =''
//   formError.classList.remove(validationConfig['errorClass']);
// }
// const isValid = (formElement,inputElement,validationConfig) =>{
//   if (!inputElement.validity.valid){
//     showInputError(formElement,inputElement,inputElement.validationMessage,validationConfig);
//   }
//   else{
//     hideInputError(formElement,inputElement,validationConfig);
//   }
// }
// const setEventListener = (formElement,validationConfig) =>{
//   const inputList = Array.from(formElement.querySelectorAll(validationConfig['inputSelector']));
//   const buttonElement = formElement.querySelector(validationConfig['submitButtonSelector']);
//   toggleButtonState(inputList,buttonElement,validationConfig);
//   inputList.forEach((inputElement) =>{
//     inputElement.addEventListener('input',()=>{
//       isValid(formElement,inputElement,validationConfig);
//       toggleButtonState(inputList,buttonElement,validationConfig);
//     })
//   })
// }
// const enableValidation = (validationConfig) =>{
//   const formList = Array.from(document.querySelectorAll(validationConfig['formSelector']))
//   formList.forEach((formElement)=>{
//     setEventListener(formElement,validationConfig);
//   })
// }
// enableValidation(validationConfig);
export class FormValidator{
  constructor(validationConfig,formElement){
    this._validationConfig = validationConfig;
    this._formElement = formElement;
  }
_disableSubmitButton(){
  this._buttonElement.classList.add(this._validationConfig['inactiveButtonClass']);
  this._buttonElement.setAttribute('disabled',true);
}
_hasInvalidInput(){
  return this._inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
}
_toggleButtonState(){
  if (this._hasInvalidInput()){
    this._disableSubmitButton();
  }
  else{
    this._buttonElement.classList.remove(this._validationConfig['inactiveButtonClass']);
    this._buttonElement.removeAttribute('disabled');
  }
}
_showInputError(inputElement){
  this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._validationConfig['inputErrorClass']);
  this._formError.textContent = inputElement.validationMessage;
  this._formError.classList.add(this._validationConfig['errorClass']);
}
_hideInputError(inputElement){
  this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._validationConfig['inputErrorClass']);
  this._formError.textContent =''
  this._formError.classList.remove(this._validationConfig['errorClass']);
}
_isValid(inputElement){
  if (!inputElement.validity.valid){
    this._showInputError(inputElement);
  }
  else{
    this._hideInputError(inputElement);
  }
}
_setEventListener(){
  this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig['inputSelector']));
  this._buttonElement = this._formElement.querySelector(this._validationConfig['submitButtonSelector']);
  this._toggleButtonState();
  this._inputList.forEach((inputElement) =>{
    inputElement.addEventListener('input',()=>{
      this._isValid(inputElement);
      this._toggleButtonState();
    })
  })
}
enableValidation(){
    this._setEventListener();
}
}