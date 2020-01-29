import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import * as nameAction from './action';

export const initialState = {
    isLoading: false,
};
const Loading = createReducer(initialState, {
    [nameAction.loadingOpen]: produce((draft, action) => {
        const { payload } = action;
        draft.isLoading = payload.isLoading;
        return draft;
    }),
    [nameAction.loadingClose]: produce((draft, action) => {
        const { payload } = action;
        draft.isLoading = payload.isLoading;
        return draft;
    }),
});

export default Loading;
