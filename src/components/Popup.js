export default class Popup{
    constructor(selector){
        this._selector = selector;
        this._element = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this); 
    }
    // Использую жесткую привязку и добавляю слушатель esc
    open(){
        this._element.classList.add('popup_active');
        document.addEventListener('keydown',this._handleEscClose);
    }
    // Использую жесткую привязку и удаляю слушатель esc
    close(){
        this._element.classList.remove('popup_active');
        document.removeEventListener('keydown',this._handleEscClose);
    }
    // Условие проверки нажата ли кнопка esc
    _handleEscClose(evt){
        if(evt.key === 'Escape'){
            this.close();
        }
    }
    // Метод, добавляющий слушатель при нажатии на кнопку "закрыть" и нажатии вне попапа
    setEventListeners(){
        this._closeButton = this._element.querySelector('.popup__close');
        this._closeButton.addEventListener('click',this.close.bind(this));
        this._element.addEventListener('mousedown', evt=>{
            const popupCheck = evt.target.classList.contains('popup');
                if (popupCheck){
                  this.close();
                }
              
        })
    }
} 