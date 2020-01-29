/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import * as nameAction from './action';

export const initialState = {
    error: null,
    users: null,
    isLoading: true,
};

const userReducer = createReducer(initialState, {
    [nameAction.userCall]: produce(draft => {
        draft.isLoading = true;
        return draft;
    }),
    [nameAction.userCallSuccess]: produce((draft, action) => {
        const { payload } = action;
        const { users } = action.payload.data;
        draft.users = users;
        draft.isLoading = payload.loading;
        draft.error = initialState.error;
        return draft;
    }),
    [nameAction.userCallFailed]: produce((draft, action) => {
        draft.users = initialState.users;
        draft.isLoading = initialState.isLoading;
        draft.error = action.error;
        return draft;
    }),
});

export default userReducer;
