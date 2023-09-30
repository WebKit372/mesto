export class Card{
    constructor(
      myID,
      ownerId,
      id,
      likes,
      text,
      image,
      templateSelector,
      handleCardClick,
      trashButtonClick,
      addLikeApi,
      deleteLikeApi
    ){
        this._ownerId = ownerId;
        this._myId = myID
        this._text = text;
        this._addLikeApi = addLikeApi;
        this._deleteLikeApi = deleteLikeApi;
        this._id = id;
        this._image = image;
        this._like = likes;
        this._likesCount = likes.length;
        this._trashButtonClick = trashButtonClick;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._trashButton = this._element.querySelector('.elements__trash');
        this._cardLikesCount = this._element.querySelector('.elements__likes-count');
        this._likeButton = this._element.querySelector('.elements__button');
      }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);

        return cardElement;
        
    }
    _likesCheck() {
        if (this._likesCount === 0) {
            return true
        }
        else {
            return false 
        }
    }
    _likeButtonStatusCheck() {
        if(this._like.some(e => e._id === this._myId)){
            return true
        }
        else{
            return false
        } 
    }
    _likesCountRender() {
        if(this._likesCheck()){
            this._cardLikesCount.classList.add('elements__likes-count_disabled')
        }
        else{
            this._cardLikesCount.classList.remove('elements__likes-count_disabled');
            this._cardLikesCount.textContent = this._likesCount;
        }
    }
    _likeStatusrender() {
        if(this._likeButtonStatusCheck()){
            this._likeButton.classList.add('elements__button_active')
        }
    }
    _likesRender() {
        this._likeStatusrender();
        this._likesCountRender();
    }
    generateCard(id) {
        this._cardImage = this._element.querySelector('.elements__image');
        this._cardName = this._element.querySelector('.elements__text');
        this._cardName.textContent = this._text;
        this._cardImage.src = this._image;
        this._cardImage.alt = this._text;
        this._setEventListeners(id)
        this._likesRender();
        return this._element;
    }
    _setEventListeners(id) {
        this._addImageButtonListener()
        this._addLikeButtonListener()
        this._addTrashbuttonListener(id)
    }
    updateLikeInfo(res){
        this._likesCount = res.length;
        this._likesCountRender();
    }
    _addLikeButtonListener() {
        this._likeButton.addEventListener('click',evt=>{
            if(evt.target.classList.contains('elements__button_active')){
                evt.target.classList.remove('elements__button_active');
                this._likesCount -=1;
                this._deleteLikeApi()
            }
            else{
                evt.target.classList.add('elements__button_active');
                this._likesCount++;
                this._addLikeApi()
            }
            this._likesCountRender();
        })
    }
    _trashButtonChecker(id){
        if(id == this._ownerId){
            return true
        }
        else{
            this._trashButton.classList.add('elements__trash_disabled')
            return false
        } 
    }
    _addTrashbuttonListener(id){
        if(this._trashButtonChecker(id)){
            this._trashButton.addEventListener('click',(evt)=>{
                const deletedElement = evt.target.closest('.elements__element');
                this._trashButtonClick(deletedElement);
          })
        }
    }
    _addImageButtonListener(){
        this._element.querySelector('.elements__image-button').addEventListener('click',()=>{
            this._handleCardClick();
        })
    }
}