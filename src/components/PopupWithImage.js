import Popup from './Popup'
export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this._popupCardImage = this._element.querySelector('.popup__card');
        this._popupCardText = this._element.querySelector('.popup__text_img');
    }
    // Перегружаю метод open, добавляю картинку открытого поп-апа, в метод добавляю аргументы image,text для приравнивания
    open(image,text){
        super.open();
        this._popupCardImage.src = image;
        this._popupCardImage.alt = text;
        this._popupCardText.textContent = text;
    }
}