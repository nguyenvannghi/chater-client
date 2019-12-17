import { CONFIRM_ACTIONS } from 'app/consts';
import { COMMON_CALL_CONFIRM_ACTION, COMMON_OK_ACTION, COMMON_CANCEL_ACTION, COMMON_RESET_ACTION } from './const';

export const onCallConfirmAction = (message, actions) => ({
    type: COMMON_CALL_CONFIRM_ACTION,
    message: message,
    actions: actions,
});

export const onOkAction = () => ({
    type: COMMON_OK_ACTION,
    data: CONFIRM_ACTIONS.PROCESS,
});

export const onCancelAction = () => ({
    type: COMMON_CANCEL_ACTION,
    data: CONFIRM_ACTIONS.CANCEL,
});

export const onResetAction = () => ({
    type: COMMON_RESET_ACTION,
});
