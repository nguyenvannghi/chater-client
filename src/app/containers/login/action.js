import * as nameConsts from './const';

const loginCall = data => ({ type: nameConsts.LOGIN_CALL, data });
const loginSuccess = () => ({ type: nameConsts.LOGIN_SUCCESS });
const loginFailed = () => ({ type: nameConsts.LOGIN_FAILED });
export { loginCall, loginSuccess, loginFailed };
