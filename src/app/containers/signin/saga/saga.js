import { put, take, call, fork, delay } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie, deleteCookie } from 'app/_utils/cookieStorage';
import { LOGIN } from '../graphql/mutations';

import * as nameEvents from './action';
import * as nameConst from './const';

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
            yield put(nameEvents.loginCalFailed(result));
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
        console.log(yield take(nameConst.LOGOUT_CALL));
        yield take(nameConst.LOGOUT_CALL);
        deleteCookie(listCookieStorageName.access_token);
        deleteCookie(listCookieStorageName.token_type);
        yield delay(1000);
        yield put(nameEvents.loginCalFailed(null));
        return;
    }
}

export default function* root() {
    yield fork(loginSaga);
    yield fork(logoutSaga);
}
