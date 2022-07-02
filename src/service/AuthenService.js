import http from "../http/http-authen";
class AuthenService {
    login(data) {
        return http.post(`/login?username=${data.username}&password=${data.password}`);
    }
}
export default new AuthenService();
