const validationConfig ={
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__form-input-error_active'
}; 
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
}
const toggleButtonState = (inputList,buttonElement,validationConfig) =>{
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(validationConfig['inactiveButtonClass']);
    buttonElement.setAttribute('disabled',true);
  }
  else{
    buttonElement.classList.remove(validationConfig['inactiveButtonClass']);
    buttonElement.removeAttribute('disabled');
  }
}
const showInputError= (formElement,inputElement,errorMessage,validationConfig) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig['inputErrorClass']);
  formError.textContent = errorMessage;
  formError.classList.add(validationConfig['errorClass']);
}
const hideInputError = (formElement,inputElement,validationConfig) =>{
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig['inputErrorClass']);
  formError.textContent =''
  formError.classList.remove(validationConfig['errorClass']);
}
const isValid = (formElement,inputElement,validationConfig) =>{
  if (!inputElement.validity.valid){
    showInputError(formElement,inputElement,inputElement.validationMessage,validationConfig);
  }
  else{
    hideInputError(formElement,inputElement,validationConfig);
  }
}
const setEventListener = (formElement,validationConfig) =>{
  const inputList = Array.from(formElement.querySelectorAll(validationConfig['inputSelector']));
  const buttonElement = formElement.querySelector(validationConfig['submitButtonSelector']);
  toggleButtonState(inputList,buttonElement,validationConfig);
  inputList.forEach((inputElement) =>{
    inputElement.addEventListener('input',()=>{
      isValid(formElement,inputElement,validationConfig);
      toggleButtonState(inputList,buttonElement,validationConfig);
    })
  })
}
const enableValidation = (validationConfig) =>{
  const formList = Array.from(document.querySelectorAll(validationConfig['formSelector']))
  formList.forEach((formElement)=>{
    setEventListener(formElement,validationConfig);
  })
}
enableValidation(validationConfig);