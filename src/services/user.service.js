import http from "./axios";

export const userService = {
    login,
    register,
}

function login(email, password) {
    return http.post('login', { email: email, password: password });
}

function register(user) {
    return http.post('register', { user });
}