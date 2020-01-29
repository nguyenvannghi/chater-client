/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import { STATUS_MESSAGE } from 'app/consts';
import * as nameAction from './action';

export const initialState = {
    isOpen: false,
    typeToast: '' || STATUS_MESSAGE.SUCCESS || STATUS_MESSAGE.ERROR || STATUS_MESSAGE.INFO || STATUS_MESSAGE.WARNING,
    message: '',
    hideDuration: 4000,
};

const ToastReducer = createReducer(initialState, {
    [nameAction.openToast]: produce((draft, action) => {
        const { payload } = action;
        draft.isOpen = true;
        draft.typeToast = payload.typeToast;
        draft.message = payload.message;
        return draft;
    }),
    [nameAction.initToast]: produce(draft => {
        draft.isOpen = initialState.isOpen;
        draft.typeToast = initialState.typeToast;
        draft.message = initialState.message;
        return draft;
    }),
});

export default ToastReducer;
