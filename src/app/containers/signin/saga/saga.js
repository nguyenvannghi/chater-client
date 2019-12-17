import { put, take, call, fork, all } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie, deleteCookie } from 'app/_utils/cookieStorage';
import * as nameConfirmConst from 'app/components/confirmPopup/const';
import { CONFIRM_ACTIONS } from 'app/consts';
import * as nameEvents from './action';
import * as nameConst from './const';

import { LOGIN } from '../graphql/mutations';

const loginCallApi = (mutation, params) => {
    return mutation({ mutation: LOGIN, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* loginSaga() {
    while (true) {
        const { mutation, params } = yield take(nameConst.LOGIN_CALL);
        yield put(loadingOpen());
        const result = yield call(loginCallApi, mutation, params);
        if (result && !result.data) {
            yield put(nameEvents.loginCallCancelled(result));
        } else {
            yield put(nameEvents.loginCallSuccess(result));
            if (!isEmpty(result) && !isEmpty(result.data)) {
                const {
                    login: { token },
                } = result.data;
                setCookie(listCookieStorageName.access_token, token, 2);
            }
        }
        yield put(loadingClose());
    }
}

function* logoutSaga() {
    while (true) {
        const data = yield take(nameConfirmConst.COMMON_OK_ACTION);
        if (data.data === CONFIRM_ACTIONS.PROCESS) {
            deleteCookie(listCookieStorageName.access_token);
            deleteCookie(listCookieStorageName.token_type);
            yield put(nameEvents.loginCallCancelled(null));
        }
    }
}

export default function* root() {
    yield all([fork(loginSaga), fork(logoutSaga)]);
}
