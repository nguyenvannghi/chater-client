import { put, take, call, fork, all } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie, deleteCookie } from 'app/_utils/cookieStorage';
import * as nameConfirmAction from 'app/components/confirmPopup/action';
import { logoutAction } from 'app/_services/authAction';
import history from 'app/routes/history';
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
            if (!isEmpty(result) && !isEmpty(result.data)) {
                const {
                    login: { token },
                } = result.data;
                setCookie(listCookieStorageName.access_token, token, 2);
            }
            yield put(nameEvents.loginCallSuccess(result));
        }
        yield put(loadingClose());
    }
}

function* logoutSaga() {
    while (true) {
        const { status, key } = yield take(nameConst.LOGOUT_CALL);
        if (status === CONFIRM_ACTIONS.PROCESS && key === 'LOG_OUT') {
            logoutAction();
            yield put(nameEvents.loginCallCancelled(null));
            yield put(nameConfirmAction.onResetAction());
        }
    }
}

export default function* root() {
    yield all([fork(loginSaga), fork(logoutSaga)]);
}
