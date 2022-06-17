class UserInfo {
  constructor(userName, userAbout) {
    console.log('userName from UserInfo:' + userName);
    console.log('userAbout from UserInfo:' + userAbout);
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
