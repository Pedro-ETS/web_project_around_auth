export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (username, password, email) => {// registro de usuarios
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password, email})
  })
    .then((response) => {
    return response.json();
  })
    .then((res) => {
    return res;
  })
    .catch((err) => console.log(err));
};
export const authorize = (identifier, password) => {//para autorizacion de usuarios
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({identifier, password})
    })
      .then((response => response.json()))
      .then((data) => {
      if (data.user) {
        localStorage.setItem('jwt', data.jwt);
        return data;
      }
    })
      .catch(err => console.log(err))
  };
