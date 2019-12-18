import { put, take, call, fork, takeLatest, cancel, delay } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { GET_USERS } from 'app/containers/chater/graphql/user/queries';

import * as nameEvents from './action';
import * as nameConst from './const';

const userCallApi = (query, params) => {
    return query({ query: GET_USERS, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* userSaga() {
    while (true) {
        const { query, params } = yield take(nameConst.USER_CALL);
        const loadDataWatcher = yield fork(takeLatest, userCallApi, query, params);
        yield delay(400);
        const result = yield call(userCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.userCalFailed(result));
        } else {
            yield put(nameEvents.userCallSuccess(result));
        }
        yield cancel(loadDataWatcher);
    }
}

export default function* root() {
    yield fork(userSaga);
}
