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
  deleteErrorMessages(){
    this._toggleButtonState()
    this._inputList.forEach((inputElement) =>{
      this._hideInputError(inputElement)
    })
  }
}