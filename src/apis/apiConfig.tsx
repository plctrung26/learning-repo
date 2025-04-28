
import axios from "axios";
import useGlobalStore from "../store/useGlobalStore";

const BASE_API_URL = 'https://dev-api-nurture.vinova.sg/api/v1/';

const instance = axios.create({
    baseURL: BASE_API_URL,
    // headers: { 'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` }
});


instance.interceptors.request.use(
    (config) => {
        useGlobalStore.getState().setLoading(true);
        const token = sessionStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            delete config.headers['Authorization'];
        }
        return config;
    },
    (error) => {
        useGlobalStore.getState().setLoading(false);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        useGlobalStore.getState().setLoading(false);
        return response.data;
    },
    (error) => {
        useGlobalStore.getState().setLoading(false);
        if (error.response?.status === 401) {
            console.log("401 haha")
        }
        return Promise.reject(error);
    }
);

export default instance;