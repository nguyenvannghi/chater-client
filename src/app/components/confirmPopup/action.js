import { createAction } from '@reduxjs/toolkit';
import { CONFIRM_ACTIONS } from 'app/consts';
import * as nameConst from './const';

const onCallConfirmAction = createAction(nameConst.COMMON_CALL_CONFIRM_ACTION, (message, key, actions) => ({
    payload: { message: message, actions: actions, key: key },
}));
const onOkAction = createAction(nameConst.COMMON_OK_ACTION, () => ({ payload: CONFIRM_ACTIONS.PROCESS }));
const onCancelAction = createAction(nameConst.COMMON_CANCEL_ACTION, () => ({ payload: CONFIRM_ACTIONS.CANCEL }));
const onResetAction = createAction(nameConst.COMMON_RESET_ACTION);

export { onCallConfirmAction, onOkAction, onCancelAction, onResetAction };
