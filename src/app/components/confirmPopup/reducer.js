import produce from 'immer';
import { COMMON_CALL_CONFIRM_ACTION, COMMON_OK_ACTION, COMMON_CANCEL_ACTION, COMMON_RESET_ACTION } from './const';

export const initialState = {
    data: null,
    isClose: true,
    message: null,
    actions: {
        ok: 'Ok',
        cancel: 'Cancel',
    },
};

const ActionConfirm = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_CALL_CONFIRM_ACTION:
            return produce(state, draft => {
                draft.data = initialState.data;
                draft.message = action.message;
                draft.actions = action.actions;
                draft.isClose = false;
            });
        case COMMON_OK_ACTION:
            return produce(state, draft => {
                draft.data = action.data;
                draft.message = initialState.message;
                draft.actions = initialState.actions;
                draft.isClose = true;
            });
        case COMMON_CANCEL_ACTION:
            return produce(state, draft => {
                draft.data = action.data;
                draft.message = initialState.message;
                draft.actions = initialState.actions;
                draft.isClose = true;
            });
        case COMMON_RESET_ACTION:
        default:
            return state;
    }
};

export default ActionConfirm;
