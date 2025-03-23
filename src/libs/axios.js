import Axios, { HttpStatusCode, isAxiosError } from 'axios';
import { handleLogoutUser, handleRefreshTokenSuccess } from '../app/slices/appSlice';
import { store } from '../app/store';

const api = Axios.create({
    baseURL: 'http://filmgo.io.vn/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const refreshAccessToken = async () => {
    try {
        const refreshToken = store.getState().app.auth.tokens.refresh_token;
        const response = await Axios.post('http://filmgo.io.vn/api/auth/refresh', {
            refresh_token: refreshToken,
        });
        store.dispatch(
            handleRefreshTokenSuccess({
                refresh_token: response.data.refresh_token,
                access_token: response.data.access_token,
            }),
        );
        return true;
    } catch (error) {
        console.error('Refresh token failed', error);
        store.dispatch(handleLogoutUser());
        window.location.href = '/login';
    }
};

api.interceptors.request.use(
    (config) => {
        const accessToken = store.getState().app.auth.tokens.access_token;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const requestUrl = error.config?.url || '';
        const ignoredPaths = ['/register', '/login'];
        if (ignoredPaths.some((path) => requestUrl.includes(path))) {
            return Promise.reject(error);
        }

        if (isAxiosError(error) && error.response?.status === HttpStatusCode.Forbidden) {
            const isRefresh = await refreshAccessToken();
            if (isRefresh && error.config) {
                const newAccessToken = store.getState().app.auth.tokens.access_token;
                if (newAccessToken) {
                    error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                }
                return api(error.config);
            }
        }

        return Promise.reject(error);
    },
);

export default api;

export const getAxiosError = (error) => {
    if (!error) return '';
    if (isAxiosError(error)) {
        const e = error.response?.data?.message;
        return Array.isArray(e) ? e[0] || '' : e;
    }
    return error.message;
};
