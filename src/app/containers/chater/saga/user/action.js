import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './const';

const userCall = createAction(nameConst.USER_CALL, (query, params) => ({ payload: { query: query, params: params } }));
const userCallCancel = createAction(nameConst.USER_CALL_CANCEL);
const userCallSuccess = createAction(nameConst.USER_CALL_SUCCESS, data => ({ payload: data }));
const userCallFailed = createAction(nameConst.USER_CALL_FAILED, error => ({ payload: error }));
const userCalFailed = createAction(nameConst.USER_CALL_FAILED, error => ({ payload: error }));
const userUpdate = createAction(nameConst.USER_CALL_UPDATE, data => ({ payload: data }));
const userUpdatedSuccess = createAction(nameConst.USER_UPDATED_SUCCESS, data => ({ payload: data }));
const userUpdatedFailed = createAction(nameConst.USER_UPDATED_FAILED, error => ({ payload: error }));

export { userCall, userCallCancel, userCallSuccess, userCallFailed, userCalFailed, userUpdate, userUpdatedSuccess, userUpdatedFailed };

// export const userCalFailed = error => ({
//     type: nameConst.USER_CALL_FAILED,
//     ...error,
// });

// export const userUpdate = data => ({
//     type: nameConst.USER_CALL_UPDATE,
//     mutation: data,
// });

// export const userUpdatedSuccess = data => ({
//     type: nameConst.USER_UPDATED_SUCCESS,
//     query: data,
// });

// export const userUpdatedFailed = error => ({
//     type: nameConst.USER_UPDATED_FAILED,
//     ...error,
// });
