import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataVideoPreview: {
        isOpenModalPriviewVideo: false,
        url: '',
    },
    province: {
        province_id: null,
        cinema_id: null,
    },
    auth: {
        isLoginIn: false,
        user: null,
        tokens: {
            access_token: null,
            refresh_token: null,
        },
        isOpenModal: false,
    },
    payment: {},
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        handleDataVideoPreview(state, actions) {
            state.dataVideoPreview.isOpenModalPriviewVideo = actions.payload.isOpenModalPriviewVideo;
            state.dataVideoPreview.url = actions.payload.url;
        },
        handleLoginUserSuccess(state, actions) {
            state.auth.isLoginIn = true;
            state.auth.user = actions.payload.user;
            state.auth.tokens.access_token = actions.payload.tokens.accessToken;
            state.auth.tokens.refresh_token = actions.payload.tokens.refreshToken;
        },
        handleLogoutUser(state) {
            state.auth.isLoginIn = false;
            state.auth.user = null;
            state.auth.tokens.access_token = null;
            state.auth.tokens.refresh_token = null;
        },
        handleRefreshTokenSuccess(state, actions) {
            state.auth.tokens.access_token = actions.payload.access_token;
            state.auth.tokens.refresh_token = actions.payload.refresh_token;
        },
        handleToggleModalAuth(state, action) {
            state.auth.isOpenModal = action.payload ? action.payload : !state.auth.isOpenModal;
        },
        handleDataProvince(state, action) {
            state.province.province_id = action.payload.province_id;
            state.province.cinema_id = action.payload.cinema_id;
        },
    },
});

export const {
    handleDataProvince,
    handleDataVideoPreview,
    handleLoginUserSuccess,
    handleLogoutUser,
    handleRefreshTokenSuccess,
    handleToggleModalAuth,
} = appSlice.actions;

export default appSlice.reducer;
