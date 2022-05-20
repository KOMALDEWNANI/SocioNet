import axios from "axios";

const instance = axios.create({
    baseURL: 'https://socionetnew.herokuapp.com/api'
  });
export default instance;