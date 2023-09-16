import './index.css';
import Section from '../components/Section';
import {initialCards,buttonEdit,nameInput,hobbyInput,buttonAdd,validationConfig,popupAddForm,popupEditForm} from '../utils/constants';
import {Card} from '../components/Card';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import { FormValidator } from '../components/FormValidator';
const imagePopup = new PopupWithImage('.popup_img');
const sectionCard = new Section({items:initialCards,renderer:(item)=>{
        const card = new Card(item['name'],item['link'],'#cards',()=>{imagePopup.open(item['link'],item['name'])})
        const cardElement = card.generateCard();
        imagePopup.setEventListeners();
        sectionCard.addItem(cardElement);
}},'.elements');
const userInfoClass = new UserInfo({userNameSelector:'.profile__name',userHobbySelector:'.profile__hobby'});
const popupEdit = new PopupWithForm('.popup_edit',(inputValues)=>{
    userInfoClass.setUserInfo(inputValues['name'],inputValues['hobby']); 
})
const popupAdd = new PopupWithForm('.popup_add',(inputValues)=>{
    sectionCard.renderUniqueItem(inputValues);
})
const validatorEditPopup =new FormValidator(validationConfig,popupEditForm);
const validatorAddPopup =new FormValidator(validationConfig,popupAddForm);
sectionCard.renderItems();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
buttonEdit.addEventListener('click',()=>{
    popupEdit.open(document.querySelector('.popup_edit'));
    hobbyInput.value =  userInfoClass.getUserInfo()['hobby'];
    nameInput.value = userInfoClass.getUserInfo()['name'];
    validatorEditPopup.deleteErrorMessages();
});
buttonAdd.addEventListener('click',()=>{
    popupAdd.open(document.querySelector('.popup_add'));
    validatorAddPopup.deleteErrorMessages();
})
validatorAddPopup.enableValidation();
validatorEditPopup.enableValidation();
