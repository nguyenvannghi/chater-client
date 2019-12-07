/* eslint-disable no-param-reassign */
import produce from 'immer';
import { STATUS_MESSAGE } from 'app/consts';
import * as nameConst from './const';

export const initialState = {
    isOpen: false,
    typeToast: '' || STATUS_MESSAGE.SUCCESS || STATUS_MESSAGE.ERROR || STATUS_MESSAGE.INFO || STATUS_MESSAGE.WARNING,
    message: '',
    hideDuration: 4000,
};

const ToastReducer = produce((draft, action) => {
    switch (action.type) {
        case nameConst.OPEN_TOAST:
            draft.isOpen = true;
            draft.typeToast = action.typeToast;
            draft.message = action.message;
            break;
        case nameConst.INIT_TOAST:
            draft.isOpen = initialState.isOpen;
            draft.typeToast = initialState.typeToast;
            draft.message = initialState.message;
            break;
        default:
            break;
    }
}, initialState);

export default ToastReducer;
