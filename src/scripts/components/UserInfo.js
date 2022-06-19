class UserInfo {
  constructor({ userName, userAbout }) {
    console.log(userName, userAbout);
    this._userName = document.querySelector(userName);
    this._userAbout = document.querySelector(userAbout);
    console.log(this._userName);
    console.log(this._userAbout);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }
  setUserinfo({ name, about }) {
    console.log(name, about);
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    console.log(this._userName.textContent);
    console.log(this._userAbout.textContent);
  }
}
export default UserInfo;
