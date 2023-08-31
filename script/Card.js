const popupElement = document.querySelector('.popup_img');
const popupImage = popupElement.querySelector('.popup__card');
const popupText = popupElement.querySelector('.popup__text_img');
export class Card{
    constructor(text,image,templateSelector,openPopup){
        this._text = text;
        this._image = image;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);

        return cardElement;
        
    }
    generateCard(){
        this._element = this._getTemplate();
        this._element.querySelector('.elements__text').textContent = this._text;
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__image').alt = this._text;
        this._setEventListeners()
        return this._element;
    }
    _setEventListeners(){
        this._addImageButtonListener()
        this._addLikeButtonListener()
        this._addTrashbuttonListener()
    }
    _addLikeButtonListener(){
        this._element.querySelector('.elements__button').addEventListener('click',function(evt){
            evt.target.classList.toggle('elements__button_active');
        })
    }
    _addTrashbuttonListener(){
        this._element.querySelector('.elements__trash').addEventListener('click',function(evt){
            const deletedElement = evt.target.closest('.elements__element');
            deletedElement.remove();
          })
    }
    _handleOpenPopup(){
        this._openPopup(popupElement);
        popupImage.src = this._image;
        popupText.textContent = this._text;
        popupImage.alt = this._text;
    }
    _addImageButtonListener(){
        this._element.querySelector('.elements__image-button').addEventListener('click',()=>{
            this._handleOpenPopup();
        })
    }
}