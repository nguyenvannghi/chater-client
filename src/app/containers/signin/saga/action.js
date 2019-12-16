import * as nameConst from './const';

export const loginCall = (mutation, params) => ({
    type: nameConst.LOGIN_CALL,
    mutation: mutation,
    params: params,
});

export const logoutCall = () => ({
    type: nameConst.LOGOUT_CALL,
});

export const loginCallSuccess = data => ({
    type: nameConst.LOGIN_CALL_SUCCESS,
    isLogin: true,
});

export const loginCalFailed = error => ({
    type: nameConst.LOGIN_CALL_FAILED,
    isLogin: false,
    ...error,
});
