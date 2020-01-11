import { put, take, call, fork } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { GET_ROOMS } from 'app/containers/chater/graphql/room/queries';
import { UPDATE_ROOM } from 'app/containers/chater/graphql/room/mutation';
import { FETCH_POLICY } from 'app/consts';

import * as nameEvents from './action';
import * as nameConst from './const';

const roomCallApi = (query, params) => {
    return query({ query: GET_ROOMS, fetchPolicy: FETCH_POLICY.NETWORK_ONLY, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

const roomUpdateApi = (mutation, params) => {
    return mutation({ mutation: UPDATE_ROOM, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* roomSaga() {
    while (true) {
        const { query, params } = yield take(nameConst.ROOM_CALL);
        yield put(loadingOpen());
        const result = yield call(roomCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.roomCalFailed(result));
        } else {
            yield put(nameEvents.roomCallSuccess(result));
        }
        yield put(loadingClose());
    }
}

function* roomSelectedSaga() {
    while (true) {
        const { room } = yield take(nameConst.ROOM_SELECTED);
        if (room) {
            yield put(nameEvents.roomCallSelectedSuccess(room));
        } else {
            yield put(nameEvents.roomCallSelectedFailed(null));
        }
    }
}

function* roomUpdateSaga() {
    while (true) {
        const { mutation, params } = yield take(nameConst.ROOM_UPDATE_CALL);
        yield put(loadingOpen());
        const result = yield call(roomUpdateApi, mutation, params);
        if (result && !result.data) {
            yield put(nameEvents.roomUpdatedFailed(result));
        } else {
            yield put(nameEvents.roomUpdatedSuccess(result));
        }
        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(roomSaga);
    yield fork(roomSelectedSaga);
    yield fork(roomUpdateSaga);
}
