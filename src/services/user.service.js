import axios from "axios"

export const userService = {
    login,
    register,
}

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.post['Accept'] = 'application/json';

function login(email, password) {
    return axios.post('login', { email: email, password: password });
}

function register(user) {
    return axios.post('register', { user });
}