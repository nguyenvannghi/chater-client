/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import * as nameAction from './action';

export const initialState = {
    data: null,
    isClose: true,
    key: null,
    message: null,
    actions: {
        ok: 'Ok',
        cancel: 'Cancel',
    },
};

const ActionConfirm = createReducer(initialState, {
    [nameAction.onCallConfirmAction]: produce((draft, action) => {
        const { payload } = action;
        draft.data = initialState.data;
        draft.key = payload.key;
        draft.message = payload.message;
        draft.actions = payload.actions;
        draft.isClose = false;
        return draft;
    }),
    [nameAction.onOkAction]: produce((draft, action) => {
        const { payload } = action;
        draft.data = payload;
        draft.message = initialState.message;
        draft.actions = initialState.actions;
        draft.isClose = true;
        return draft;
    }),
    [nameAction.onCancelAction]: produce((draft, action) => {
        const { payload } = action;
        draft.data = payload;
        draft.message = initialState.message;
        draft.actions = initialState.actions;
        draft.isClose = true;
        return draft;
    }),
    [nameAction.onResetAction]: produce(draft => {
        draft.data = initialState.data;
        draft.key = initialState.key;
        draft.message = initialState.message;
        draft.actions = initialState.actions;
        draft.isClose = true;
        return draft;
    }),
});

export default ActionConfirm;
