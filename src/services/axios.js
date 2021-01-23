import axios from "axios"

const http = axios
http.defaults.baseURL = 'http://127.0.0.1:8000/api/';
http.defaults.headers.post['Accept'] = 'application/json';

export default http