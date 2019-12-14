import * as nameConst from './const';

export const messageCall = (query, params) => ({
    type: nameConst.MESSAGE_CALL,
    query: query,
    params: params,
});

export const messageCallSuccess = data => ({
    type: nameConst.MESSAGE_CALL_SUCCESS,
    query: data,
});

export const messageCalFailed = error => ({
    type: nameConst.MESSAGE_CALL_FAILED,
    ...error,
});
