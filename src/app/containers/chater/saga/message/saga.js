import { put, take, call, fork } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { GET_MESSAGES } from 'app/containers/chater/graphql';
import { FETCH_POLICY } from 'app/consts';

import * as nameEvents from './action';
import * as nameConst from './const';

const messageCallApi = (query, params) => {
    return query({ query: GET_MESSAGES, fetchPolicy: FETCH_POLICY.NETWORK_ONLY, variables: { where: params } })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* messageSaga() {
    while (true) {
        const { query, params } = yield take(nameConst.MESSAGE_CALL);
        yield put(loadingOpen());
        const result = yield call(messageCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.messageCalFailed(result));
        } else {
            yield put(nameEvents.messageCallSuccess(result));
        }
        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(messageSaga);
}
