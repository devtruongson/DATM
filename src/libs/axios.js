import Axios, { isAxiosError } from 'axios';

const api = Axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    baseURL: 'http://filmgo.io.vn/api',
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default api;

export const getAxiosError = (error) => {
    if (!error) return '';
    if (isAxiosError(error)) {
        const e = error.response?.data?.message;

        if (Array.isArray(e)) {
            return e[0] || '';
        }

        return e;
    }

    return error.message;
};
