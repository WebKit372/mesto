import Popup from "./Popup";
export default class popupDeletion extends Popup{
    constructor(selector){
        super(selector);
        this._button = this._element.querySelector('.popup__save')
    }
    setDynamicListener(callback){
        this._button.addEventListener('click',()=>{
            callback();
            this.close();
        })
    }
}