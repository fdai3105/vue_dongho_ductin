import http from "./axios";

export const productService = {
    getProduct,
    getProducts,
    getBrand,
    getProductByBrand,
    getCategory,
    getProductByCategory,
}

function getProducts() {
    return http.get('product');
}

function getProduct(name) {
    return http.get('product/by-name/' + name);
}

function getCategory() {
    return http.get('category');
}
function getProductByCategory(name) {
    return http.get('category/product/' + name);
}

function getBrand() {
    return http.get('brand');
}

function getProductByBrand(name) {
    return http.get('brand/product/' + name);
}
