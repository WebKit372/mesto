import Popup from './Popup'
export class PopupWithImage extends Popup{
    // Перегружаю метод open, добавляю картинку открытого поп-апа, в метод добавляю аргументы image,text для приравнивания
    open(image,text){
        super.open();
        this._element.querySelector('.popup__card').src = image;
        this._element.querySelector('.popup__card').alt = text;
        this._element.querySelector('.popup__text_img').textContent = text;
    }
}