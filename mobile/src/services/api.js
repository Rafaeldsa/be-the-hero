import axios from "axios";

const api = axios.create({
  baseURL: "http://be-the-hero777.herokuapp.com/"
});

export default api;
