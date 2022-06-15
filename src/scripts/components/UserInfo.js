class UserInfo {
  constructor(userName, userAbout) {
    console.log('userName:' + userName);
    console.log('userAbout:' + userAbout);
    this._userName = userName;
    this._userAbout = userAbout;
  }
  getUserInfo = () => {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  };
  setUserInfo = ({ name, about }) => {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  };
}
export default UserInfo;
