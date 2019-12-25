import * as nameConst from './const';

export const userCall = (query, params) => ({
    type: nameConst.USER_CALL,
    query: query,
    params: params,
});

export const userCallCancel = () => ({
    type: nameConst.USER_CALL_CANCEL,
});

export const userCallSuccess = data => ({
    type: nameConst.USER_CALL_SUCCESS,
    query: data,
});

export const userCalFailed = error => ({
    type: nameConst.USER_CALL_FAILED,
    ...error,
});

export const userUpdate = data => ({
    type: nameConst.USER_CALL_UPDATE,
    mutation: data,
});

export const userUpdatedSuccess = data => ({
    type: nameConst.USER_UPDATED_SUCCESS,
    query: data,
});

export const userUpdatedFailed = error => ({
    type: nameConst.USER_UPDATED_FAILED,
    ...error,
});
