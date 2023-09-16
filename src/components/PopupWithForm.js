import Popup from './Popup';
export class PopupWithForm extends Popup{
    constructor(selector,callback) {
        super(selector);
        this._callback = callback;
        this._popupForm = this._element.querySelector('.popup__form');
    }
    // Создаю и возвращаю объект с информацией по каждому инпуту внутри попапа
    _getInputValues(){
        this._inputValues = {};
        this._element.querySelectorAll('input').forEach(input=>{
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }
    // Перегружаю метод присваивания слушателей, добавлю закрытие при отправке формы
    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit',(evt)=>{
            evt.preventDefault();
            this._callback(this._getInputValues());
            this.close();
        })
    }
    // При закрытии попапа форма сбрасывается
    close(){
        super.close();
        setTimeout(()=>{this._popupForm.reset()},300);
    }
}