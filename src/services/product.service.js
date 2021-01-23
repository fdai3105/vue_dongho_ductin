import axios from "axios"

export const productService = {
    getProduct,
    getProducts,
    getBrand,
    getProductByBrand,
    getCategory,
    getProductByCategory,
}

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Accept'] = 'application/json';

function getProducts() {
    return axios.get('product');
}

function getProduct(name) {
    return axios.get('product/by-name/' + name);
}

function getCategory() {
    return axios.get('category');
}
function getProductByCategory(name) {
    return axios.get('category/product/' + name);
}

function getBrand() {
    return axios.get('brand');
}

function getProductByBrand(name) {
    return axios.get('brand/product/' + name);
}
