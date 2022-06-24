class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
  setAvatar = (formValues) => {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: formValues.avatar }),
    }).then(this._checkResponse);
  };
  getProfileInfo = () => {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  };
  setProfileInfo = (profileInfo) => {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(profileInfo),
    }).then(this._checkResponse);
  };
  getInitialCards = () => {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  };
  addCard = (formValues) => {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: formValues.title, link: formValues.link }),
    }).then(this._checkResponse);
  };
  removeCard = (cardId) => {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  };
  addLike = (cardId) => {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  };
  removeLike = (cardId) => {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  };
}
export default Api;
