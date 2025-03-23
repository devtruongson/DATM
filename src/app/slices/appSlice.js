import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataVideoPreview: {
        isOpenModalPriviewVideo: false,
        url: '',
    },
    auth: {
        isLoginIn: false,
        user: null,
        tokens: {
            access_token: null,
            refresh_token: null,
        },
    },
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
            state.auth.tokens.access_token = actions.payload.tokens.access_token;
            state.auth.tokens.refresh_token = actions.payload.tokens.refresh_token;
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
    },
});

// Action creators are generated for each case reducer function
export const { handleDataVideoPreview, handleLoginUserSuccess, handleLogoutUser, handleRefreshTokenSuccess } =
    appSlice.actions;

export default appSlice.reducer;
