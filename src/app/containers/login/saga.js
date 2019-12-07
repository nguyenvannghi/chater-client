import { put, take, call, fork } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { openToast } from 'app/components/toast/action';
import { STATUS_MESSAGE } from 'app/consts';

import * as nameEvents from './action';
import { LOGIN_CALL, FIELDS_SIGNIN } from './const';

const loginCallApi = (username, password) => {
    return new Promise(resolve => setTimeout(resolve, 3000))
        .then(() => {
            if ((username === 'tainm' && password === 'Mtai12345@') || (username === 'test' && password === 'test')) return true;
        })
        .catch(() => {
            return { errMess: 'Lỗi rồi.' };
        });
};

function* loginSaga() {
    while (true) {
        const { data } = yield take(LOGIN_CALL);
        yield put(loadingOpen());
        const result = yield call(loginCallApi, data[FIELDS_SIGNIN.NAME], data[FIELDS_SIGNIN.PASSWORD]);
        if (result && !result.errMess) {
            yield put(nameEvents.loginSuccess());
            yield put(openToast(STATUS_MESSAGE.SUCCESS, 'Login success'));
        } else {
            yield put(nameEvents.loginFailed());
            yield put(openToast(STATUS_MESSAGE.ERROR, 'Login failed'));
        }

        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(loginSaga);
}
