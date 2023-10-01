export default class Api {
    constructor(options) {
      this._URL = options.URL;
      this._token = options.token;
    //   this._callback = callback;
    }
    _getJSON(res){
        if(res.ok){
            return res.json()
        }
        else{
            return Promise.reject(res.status)
        }
    }
    deleteCard(cardId){
      return fetch(`${this._URL}/${cardId}`,{
        method:"DELETE",
        headers:{
            authorization:this._token}
        })
        .then((res)=> {
          return this._getJSON(res)
      })
    }
    getMyInfo(){
        return fetch(this._URL,{
            headers:{
                authorization:this._token}
            })
        .then((res)=> {
            return this._getJSON(res)
        })
    }
    getInitialCards() {
      return fetch(this._URL,{
        headers:{
          authorization:this._token} 
      })
      .then((res)=>{
        return this._getJSON(res);
    })
    }
    getProfileInfo(){
        return fetch(this._URL,{
            headers:{
                authorization:this._token
            }
        })
        .then((res)=>{
            return this._getJSON(res);
        })
    }
    updateProfileInfo(userInfo) {
        return fetch(this._URL,{
            method:'PATCH',
            headers:{
                authorization:this._token,
                "Content-Type":'application/json'
            },
            body:JSON.stringify({
                name:userInfo.name,
                about:userInfo.hobby
            })
        })
        .then(res=>{return this._getJSON(res)})
    }
    updateProfileAvatar(URL) {
      return fetch(`${this._URL}/avatar`,{
        method:'PATCH',
        headers:{
            authorization:this._token,
            "Content-Type":'application/json'
        },
        body:JSON.stringify({
          avatar:URL
        })
    })
    .then(res=>{return this._getJSON(res)})
    }
    addLike(cardId){
      return fetch(`${this._URL}/${cardId}/likes`,{
        method: "PUT",
        headers:{
          authorization:this._token
        }
      })
      .then((res)=>{
        console.log("Добавил лайк")
        return this._getJSON(res);
      })
    }
    deleteLike(cardId){
      return fetch(`${this._URL}/${cardId}/likes`,{
        method: "DELETE",
        headers:{
          authorization:this._token
        }
      })
      .then((res)=>{
        console.log("Снял лайк")
        return this._getJSON(res);
    })
    }
    addCard(cardInfo){
        return fetch(this._URL,{
            method: "POST",
            headers: {
                authorization:this._token,
                "Content-type":"application/json"        
            },
            body: JSON.stringify({
                name: cardInfo.name,
                link: cardInfo.link
            })
        })
        .then(res=> {return this._getJSON(res)})
    }
    // другие методы работы с API
  }