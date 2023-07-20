import axios from "axios";

const RENDERER_VITE_SERVER_URL = import.meta.env.RENDERER_VITE_SERVER_URL

let BaseURL = "/api/v1/"
if (RENDERER_VITE_SERVER_URL)
    BaseURL = RENDERER_VITE_SERVER_URL + BaseURL
const apiClient = axios.create({
    baseURL: BaseURL,
    withCredentials: true
})

apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.data.message === "please login to access this resource" || error.response.data.message === "login again ! session expired") {
        alert("loggedt out")
        window.location.reload()
    }
    return Promise.reject(error);
});

export {
    BaseURL,
    apiClient
}