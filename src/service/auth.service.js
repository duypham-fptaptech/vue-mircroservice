import axios from 'axios';

const API_URL = 'http://localhost:8088/api/v1/keycloak/users/';

class AuthService {
  login(account) {
      console.log("username la: " + account.username)
      console.log("password la: " + account.password)
    return axios
        .post(API_URL + 'login', {
            username: account.username,
            password: account.password
        })
        .then(response => {
          if (response.data.access_token) {
            localStorage.setItem('account', response.data.access_token);
          }
          return response.data;
        });
  }

  logout() {
    localStorage.removeItem('account');
    localStorage.removeItem('orders');
  }

  register(account) {
    return axios.post(API_URL + 'register', {
      username: account.username,
      password: account.password
    });
  }
}

export default new AuthService();
