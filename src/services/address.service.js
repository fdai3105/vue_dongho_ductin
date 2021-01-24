import http from "./axios";

export const addressService = {
    getCities,
    getDistricts,
    getWards,
    addAddress,
}

function getCities() {
    return http.get('https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/tinh_tp.json');
}

function getDistricts(id) {
    return http.get('https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/quan-huyen/' + id + '.json');
}

function getWards(id) {
    return http.get('https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/xa-phuong/' + id + '.json');
}

function addAddress(token, city, district, ward, detail) {
    const config = {
        headers: { Authorization: token }
    };
    return http.post('/add-address', { city: city, district: district, ward: ward, detail: detail }, config);
}