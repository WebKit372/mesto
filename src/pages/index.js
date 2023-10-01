import './index.css';
import Section from '../components/Section';
import {
  buttonEdit,
  nameInput,
  hobbyInput,
  buttonAdd,
  validationConfig,
  formValidators,
  apiOptions,
  buttonAvatarUpdate
} 
from '../utils/constants';
import {Card} from '../components/Card';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import { FormValidator } from '../components/FormValidator';
import Api from '../components/Api';
import popupDeletion from '../components/PopupDeletion';
const imagePopup = new PopupWithImage('.popup_img');
const apiProfile = new Api(apiOptions.ProfileOption);
const apiCards = new Api(apiOptions.CardsOption);
let myId
let sectionCard
const trashButtonPopup = new popupDeletion('.popup_del');
const userInfoClass = new UserInfo(
  {
    avatarSelector:'.profile__avatar-button',
    userNameSelector:'.profile__name',
    userHobbySelector:'.profile__hobby'
  }
);
const popupEditProfile = new PopupWithForm(
  '.popup_edit',
  (inputValues)=>{
    apiProfile.updateProfileInfo(inputValues)
    .then((result)=>{
        userInfoClass.setUserInfo(result['name'],result['about'])
    })
    .catch((err)=>console.log(err))
    .finally(()=>popupEditProfile.renderLoader(false))
  }
)
const popupAddCard = new PopupWithForm(
  '.popup_add',
  (inputValues)=>{
    apiCards.addCard(inputValues)
    .then((result)=>{
        sectionCard.renderUniqueItem(result);
    })
    .catch((err)=>console.log(err))
    .finally(()=>popupAddCard.renderLoader(false))
  }
)
const popupAvatarUpdate = new PopupWithForm(
  '.popup_avatar',
  (inputValues)=>{
    apiProfile.updateProfileAvatar(inputValues['avatar-link'])
    .then((result)=>{
      userInfoClass.updateAvatar(result.avatar)
    })
    .catch(err=>console.log(err))
    .finally(()=>popupAvatarUpdate.renderLoader(false))
  });
const enableValidation = (config) =>{
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement)=>{
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
  })
}

Promise.all([
  apiProfile.getProfileInfo(),
  apiCards.getInitialCards()
])
  .then(result => {
    userInfoClass.setUserInfo(
      result[0]['name'],
      result[0]['about']
      )
    userInfoClass.updateAvatar(result[0]['avatar'])
    myId = result[0]._id

    sectionCard = new Section({
      items:result[1].reverse(),
      renderer:(item)=>{
        const card = new Card(
          myId,
          item['owner']['_id'],
          item['_id'],
          item['likes'],
          item['name'],
          item['link'],'#cards',
          () => {
            imagePopup.open(item['link'],item['name'])
          },
          (deletedElement) => {
            trashButtonPopup.open();
            trashButtonPopup.setDynamicListener(()=>{
              apiCards.deleteCard(card._id)
              .then(()=>{
                deletedElement.remove();
                trashButtonPopup.close()
              })
              .catch(err=>console.log(err));
            });
          },
          ()=>apiCards.addLike(item["_id"])
          .then(result=>card.updateLikeInfo(result.likes))
          .catch(err=>console.log(err)),
          ()=>apiCards.deleteLike(item["_id"])
          .then(result=>card.updateLikeInfo(result.likes))
          .catch(err=>console.log(err))
        )
        const cardElement = card.generateCard(myId);
        sectionCard.addItem(cardElement);
      }
    },
  '.elements'
  );
  sectionCard.renderItems()
  })
imagePopup.setEventListeners();
trashButtonPopup.setEventListeners()
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupAvatarUpdate.setEventListeners();
buttonEdit.addEventListener('click',()=>{
  popupEditProfile.open();
    const {hobby,name} = userInfoClass.getUserInfo();
    hobbyInput.value =  hobby;
    nameInput.value = name;
    formValidators['popup-form-edit'].deleteErrorMessages();
});
buttonAdd.addEventListener('click',()=>{
  popupAddCard.open();
    formValidators['popup-form-add'].deleteErrorMessages();
})
buttonAvatarUpdate.addEventListener('click',()=>{
  popupAvatarUpdate.open();
  formValidators['popup-form-avatar'].deleteErrorMessages();
})
enableValidation(validationConfig);