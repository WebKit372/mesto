export default class Section{
    constructor({items,renderer},selector){
        this._items = items;
        this._renderer = renderer;
        this._parentElement = document.querySelector(selector);
    }
    renderItems(){
        this._items.forEach((item)=>{
            this._renderer(item);
        })
    }
    renderUniqueItem(card){
        this._renderer(card);
    }
    addItem(element){
        this._parentElement.prepend(element)
    }
}