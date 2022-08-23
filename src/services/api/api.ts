
import axios from 'axios';

const Api = axios.create({
  baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api/v1/",
  headers: {
"Content-Type": "application/json",
 "Accept": "application/json",
  },
  
})

export default Api;