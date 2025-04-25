import axios from "axios";

const BASE_API_URL = 'https://dev-api-nurture.vinova.sg/api/v1/'

const instance = axios.create({
    baseURL: BASE_API_URL,
    headers: { 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }
});

console.log(instance)

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log("This is from the interceptor: ", error)
    if (error.response?.status === 401) {
        console.log("hello")
    }
    return Promise.reject(error);
}
)

export default instance