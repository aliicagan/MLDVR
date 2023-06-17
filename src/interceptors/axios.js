import axios from "axios";
axios.defaults.baseURL = "https://api.dev.maldavar.ogzatech.com/api/";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);
