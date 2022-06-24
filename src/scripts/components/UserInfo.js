class UserInfo {
  constructor({ userName, userAbout, userAvatar }) {
    this._userName = document.querySelector(userName);
    this._userAbout = document.querySelector(userAbout);
    this._userAvatar = document.querySelector(userAvatar);
  }
  getUserInfo = () => {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  };
  setUserInfo = (userInfo) => {
    this._userName.textContent = userInfo.name;
    this._userAbout.textContent = userInfo.about;
    this._userAvatar.style.backgroundImage = `url(${userInfo.avatar})`;
    this.userId = userInfo._id;
  };
}
export default UserInfo;
