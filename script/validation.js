const showInputError= (formElement,inputElemet,errorMessage) => {
    const formError = formElement.querySelector(`.${inputElemet.id}-error`);
    inputElemet.classList.add('popup__text_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__form-input-error_active');
  }
  const hideInputError = (formElement,inputElement) =>{
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__text_error');
    formError.textContent =''
    formError.classList.remove('popup__form-input-error_active');
  }
  const isValid = (formElement,inputElement) =>{
    if (!inputElement.validity.valid){
      showInputError(formElement,inputElement,inputElement.validationMessage);
    }
    else{
      hideInputError(formElement,inputElement);
    }
  }
  const setEventListener = (formElement) =>{
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    inputList.forEach((inputElement) =>{
      inputElement.addEventListener('input',()=>{
        isValid(formElement,inputElement);
      })
    })
  }
  const enableValidation = () =>{
    const formList = Array.from(document.querySelectorAll('.popup__form'))
    formList.forEach((formElement)=>{
      setEventListener(formElement);
    })
  }
  enableValidation();