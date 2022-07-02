import http from "../http/http-order";
class OrderDataService {
    getAll() {
        return http.get(`/orders/products`);
    }
    checkout(data) {
        return http.post(`/orders`, data);
    }
}
export default new OrderDataService();
