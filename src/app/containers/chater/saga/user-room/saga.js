import { put, take, call, fork } from 'redux-saga/effects';
import { GET_USER_ROOMS } from 'app/containers/chater/graphql/user-room/queries';
// import { CREATE_USER_ROOM } from 'app/containers/chater/graphql/user-room/mutation';

import * as nameEvents from './action';
import * as nameConst from './const';

const userRoomsCallApi = (query, params) => {
    return query({ query: GET_USER_ROOMS, variables: params })
        .then(res => {
            return res;
        })
        .catch(err => err);
};

function* userRoomsSaga() {
    while (true) {
        const { query, params } = yield take(nameConst.USER_ROOM_CALL);
        const result = yield call(userRoomsCallApi, query, params);
        if (result && !result.data) {
            yield put(nameEvents.userRoomsFailed(result));
        } else {
            yield put(nameEvents.userRoomsSuccess(result));
        }
    }
}

export default function* root() {
    yield fork(userRoomsSaga);
}
