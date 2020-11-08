import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const axiosInstance = axios.create({ baseURL: "http://localhost:3333"});

export default axiosInstance;