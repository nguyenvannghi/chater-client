import { put, take, call, fork } from 'redux-saga/effects';
import { loadingOpen, loadingClose } from 'app/components/loadingApp/action';
import { GET_USER_ROOMS } from 'app/containers/chater/graphql/user-room/queries';
import { CREATE_USER_ROOM, UPDATE_USER_ROOM } from 'app/containers/chater/graphql/user-room/mutation';
import { FETCH_POLICY } from 'app/consts';

import * as nameEvents from './action';
import * as nameConst from './const';

const userRoomsCallApi = (query, params) => {
    return query({ query: GET_USER_ROOMS, fetchPolicy: FETCH_POLICY.NETWORK_ONLY, variables: { where: params } })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

const roomUsersCallApi = (query, params) => {
    return query({ query: GET_USER_ROOMS, fetchPolicy: FETCH_POLICY.NETWORK_ONLY, variables: { where: params } })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

const userRoomAddApi = (mutation, params) => {
    return mutation({ mutation: CREATE_USER_ROOM, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

const userRoomUpdateApi = (mutation, params) => {
    return mutation({ mutation: UPDATE_USER_ROOM, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* userRoomsSaga() {
    while (true) {
        const {
            payload: { query, params },
        } = yield take(nameConst.USER_ROOM_CALL);
        const result = yield call(userRoomsCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.userRoomsFailed(result));
        } else {
            yield put(nameEvents.userRoomsSuccess(result));
        }
    }
}

function* roomUserSaga() {
    while (true) {
        const {
            payload: { query, params },
        } = yield take(nameConst.ROOM_USER_CALL);
        const result = yield call(roomUsersCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.roomUserFailed(result));
        } else {
            yield put(nameEvents.roomUserSuccess(result));
        }
    }
}

function* userRoomAddSaga() {
    while (true) {
        const {
            payload: { mutation, params },
        } = yield take(nameConst.USER_ROOM_ADD_CALL);
        yield put(loadingOpen());
        const result = yield call(userRoomAddApi, mutation, params);
        if (result && !result.data) {
            yield put(nameEvents.userRoomAddedFailed(result));
        } else {
            yield put(nameEvents.userRoomAddedSuccess(result));
        }
        yield put(loadingClose());
    }
}

function* userRoomUpdateSaga() {
    while (true) {
        const {
            payload: { mutation, params },
        } = yield take(nameConst.USER_ROOM_UPDATE_CALL);
        yield put(loadingOpen());
        const result = yield call(userRoomUpdateApi, mutation, params);
        if (result && !result.data) {
            yield put(nameEvents.userRoomUpdatedFailed(result));
        } else {
            yield put(nameEvents.userRoomUpdatedSuccess(result));
        }
        yield put(loadingClose());
    }
}

export default function* root() {
    yield fork(userRoomsSaga);
    yield fork(roomUserSaga);
    yield fork(userRoomAddSaga);
    yield fork(userRoomUpdateSaga);
}
