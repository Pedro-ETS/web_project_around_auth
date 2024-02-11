export default class Api {
  constructor({ address, token, datos }) {
    this._url = address;
    this._authorization = token;
    this._datos = datos;
  }
  _fetchWithAuthorization(url, options) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Error: ${res.statusText} (${res.status})`);
      }
    });
  }
  getInitialCards(fullLink) {
    return this._fetchWithAuthorization(`${this._url}${fullLink}`, {}).catch(
      (error) => {
        console.error(`Error fetching initial cards: ${error.message}`);
        throw error;
      }
    );
  }
  setCard(fullLink, formData) {
    const url = `${this._url}${fullLink}`;
    const options = {
      method: "POST",
      body: JSON.stringify({
        link: formData.link,
        name: formData.name,
      }),
    };
    return this._fetchWithAuthorization(url, options);
  }
  getUser(fullLink) {
    return this._fetchWithAuthorization(`${this._url}${fullLink}`, {}).catch(
      (error) => {
        console.error(`Error fetching initial cards: ${error.message}`);
        throw error;
      }
    );
  }
  changeLikeCardStatus(isLiKed, fullLink, cardId) {
    const url = `${this._url}${fullLink + cardId}`;
    if (isLiKed) {
      const options = {
        method: "PUT",
      };
      return this._fetchWithAuthorization(url, options);
    } else {
      const options = {
        method: "DELETE",
      };
      return this._fetchWithAuthorization(url, options);
    }
  }
  deleteCard(fullLink, cardId) {
    const url = `${this._url}${fullLink + cardId}`;
    const options = {
      method: "DELETE",
    };
    return this._fetchWithAuthorization(url, options);
  }
  setUserInfo(fullLink, dataUser) {
    const url = `${this._url}${fullLink}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify({
        about: dataUser.about,
        name: dataUser.name,
      }),
    };
    return this._fetchWithAuthorization(url, options);
  }
  modifyImgUser(fullLink, datos) {
    const url = `${this._url}${fullLink}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify({
        avatar: datos.avatar,
      }),
    };
    return this._fetchWithAuthorization(url, options);
  }
}
