import axios from "axios"

const http = axios
http.defaults.baseURL = 'https://4c5430123f64.ngrok.io/api/';
http.defaults.headers.post['Accept'] = 'application/json';

export default http