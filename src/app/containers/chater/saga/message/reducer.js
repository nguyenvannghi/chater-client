/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import * as nameAction from './action';

export const initialState = {
    error: null,
    messages: null,
    isLoading: false,
};

const messageReducer = createReducer(initialState, {
    [nameAction.messageCall]: produce(draft => {
        draft.isLoading = true;
        return draft;
    }),
    [nameAction.messageCallSuccess]: produce((draft, action) => {
        const { payload } = action;
        const { messages } = action.payload.data;
        draft.messages = messages;
        draft.isLoading = payload.loading;
        draft.error = initialState.error;
        return draft;
    }),
    [nameAction.messageCalFailed]: produce((draft, action) => {
        const { payload } = action;
        draft.messages = initialState.messages;
        draft.isLoading = initialState.isLoading;
        draft.error = payload;
        return draft;
    }),
});

export default messageReducer;
