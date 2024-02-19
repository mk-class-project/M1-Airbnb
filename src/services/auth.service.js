import axios from 'axios';

// add env variable for API_URL in .env file
const API_URL = process.env.API_URL;

export default {

  register(body) {
    return axios.post(API_URL + 'register', body, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.data);
  },


  login(body) {
    return axios.post(API_URL + 'login', body, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.data);
  }


}