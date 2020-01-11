import { put, take, call, fork } from 'redux-saga/effects';
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
        const {
            payload: { query, params },
        } = yield take(nameConst.USER_CALL);
        const result = yield call(userCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.userCalFailed(result));
        } else {
            yield put(nameEvents.userCallSuccess(result));
        }
    }
}

export default function* root() {
    yield fork(userSaga);
}
