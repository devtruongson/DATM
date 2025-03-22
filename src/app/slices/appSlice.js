import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataVideoPreview: {
        isOpenModalPriviewVideo: false,
        url: '',
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
    },
});

// Action creators are generated for each case reducer function
export const { handleDataVideoPreview } = appSlice.actions;

export default appSlice.reducer;
