import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const messageCall = createAction(nameConst.MESSAGE_CALL, (query, params) => ({ payload: { query: query, params: params } }));
const messageCallSuccess = createAction(nameConst.MESSAGE_CALL_SUCCESS, data => ({ payload: data }));
const messageCalFailed = createAction(nameConst.MESSAGE_CALL_FAILED, error => ({ payload: error }));

export { messageCall, messageCallSuccess, messageCalFailed };
