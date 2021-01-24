import http from "./axios";

export const cartService = {
    addToCart,
    getCarts,
    removeCart,
    checkout,
}

function addToCart(token, product, quantity) {
    const config = {
        headers: { Authorization: token }
    };
    return http.post('/add-to-cart', { product_id: product, quantity: quantity }, config);
}

function getCarts(token) {
    const config = {
        headers: { Authorization: token }
    };
    return http.get('/get-carts', config);
}

function removeCart(token, id) {
    const config = {
        headers: { Authorization: token }
    };
    return http.post('/remove-cart', { id: id }, config);
}

function checkout(token, note, address) {
    const config = {
        headers: { Authorization: token }
    };
    return http.post('/checkout', { note: note, address_id: address }, config);
}