export default class UserInfo{
    constructor({userNameSelector, userHobbySelector,avatarSelector}){
        this._userNameElement = document.querySelector(userNameSelector);
        this._userHobbyElement = document.querySelector(userHobbySelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo(){
        this._userInfo = {
            name : this._userNameElement.textContent,
            hobby: this._userHobbyElement.textContent
        }
        return this._userInfo;
    }
    setUserInfo(name,hobby){
        this._userNameElement.textContent = name;
        this._userHobbyElement.textContent = hobby;
    }
    updateAvatar(URL){
        this._avatarElement.style.backgroundImage =`url(${URL})`;
    }
}