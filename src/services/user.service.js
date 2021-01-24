import http from "./axios";

export const userService = {
    login,
    register,
    auth,
    logout,
    getAddress,
}

function login(email, password) {
    return http.post('login', { email: email, password: password });
}

function register(fullName, email, password, phone, gender) {
    return http.post('register', {
        full_name: fullName,
        email: email,
        password: password,
        phone_number: phone, gender: gender
    });
}

function auth() {
    const auth = localStorage.getItem('user');
    return JSON.parse(auth);
}

function getAddress(token) {
    const config = {
        headers: { Authorization: token }
    };
    return http.get('/user-address', config);
}

function logout() {
    localStorage.removeItem('user');
}