import Popup from './Popup';
export class PopupWithForm extends Popup{
    constructor(selector,callback) {
        super(selector);
        this._callback = callback;
        this._popupForm = this._element.querySelector('.popup__form');
        this._submitButton = this._element.querySelector('.popup__save');
    }
    // Создаю и возвращаю объект с информацией по каждому инпуту внутри попапа
    _getInputValues(){
        this._inputValues = {};
        this._element.querySelectorAll('input').forEach(input=>{
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }
    renderLoader(isLoading){
        if(isLoading == true){
            this._submitButton.textContent = "Сохранение..."
        }
        else{
            setTimeout(()=>{this._submitButton.textContent = "Сохранить"},300);
            this.close();
        }
    }
    // Перегружаю метод присваивания слушателей, добавлю закрытие при отправке формы
    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit',(evt)=>{
            evt.preventDefault();
            this.renderLoader(true);
            this._callback(this._getInputValues());
        })
    }
    // При закрытии попапа форма сбрасывается
    close(){
        super.close();
        setTimeout(()=>{this._popupForm.reset()},300);
    }
}