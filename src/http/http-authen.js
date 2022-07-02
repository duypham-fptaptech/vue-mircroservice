import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8088/api/v1/keycloak/users",
    headers: {
        "Content-type": "application/json"
    }
});
