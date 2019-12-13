import { put, take, call, fork } from 'redux-saga/effects';

import http from 'app/_services/api';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { parseResponse, parseErr } from 'app/_utils/parseResponse';

import * as nameEvents from './action';
import * as nameConst from './const';

const baseFormPath = '/Activities';

const employeeCallApi = () => {
    return http()
        .get(baseFormPath)
        .then(resp => parseResponse(resp))
        .catch(err => parseErr(err));
};

function* employeeSaga() {
    while (true) {
        yield take(nameConst.EMPLOYEE_CALL);
        yield put(loadingOpen());
        const result = yield call(employeeCallApi);
        if (result && result.errMess) {
            yield put(nameEvents.employeeCalFailed(result.errMess));
        } else {
            yield put(nameEvents.employeeCallSuccess(result));
        }

        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(employeeSaga);
}
