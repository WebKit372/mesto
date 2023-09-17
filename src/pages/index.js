import './index.css';
import Section from '../components/Section';
import {initialCards,buttonEdit,nameInput,hobbyInput,buttonAdd,validationConfig,formValidators} from '../utils/constants';
import {Card} from '../components/Card';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import { FormValidator } from '../components/FormValidator';
const imagePopup = new PopupWithImage('.popup_img');
imagePopup.setEventListeners();
const sectionCard = new Section({items:initialCards,renderer:(item)=>{
        const card = new Card(item['name'],item['link'],'#cards',()=>{imagePopup.open(item['link'],item['name'])})
        const cardElement = card.generateCard();
        sectionCard.addItem(cardElement);
}},'.elements');
const userInfoClass = new UserInfo({userNameSelector:'.profile__name',userHobbySelector:'.profile__hobby'});
const popupEdit = new PopupWithForm('.popup_edit',(inputValues)=>{
    userInfoClass.setUserInfo(inputValues['name'],inputValues['hobby']); 
})
const popupAdd = new PopupWithForm('.popup_add',(inputValues)=>{
    sectionCard.renderUniqueItem(inputValues);
})
sectionCard.renderItems();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
buttonEdit.addEventListener('click',()=>{
    popupEdit.open();
    const {hobby,name} = userInfoClass.getUserInfo();
    hobbyInput.value =  hobby;
    nameInput.value = name;
    formValidators['popup-form-edit'].deleteErrorMessages();
});
buttonAdd.addEventListener('click',()=>{
    popupAdd.open();
    formValidators['popup-form-add'].deleteErrorMessages();
})
const enableValidation = (config) =>{
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement)=>{
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute('name');
        formValidators[formName] = validator;
        validator.enableValidation();
    })
}
enableValidation(validationConfig);