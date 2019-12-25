import * as nameConst from './const';

export const roomCall = (query, params) => ({
    type: nameConst.ROOM_CALL,
    query: query,
    params: params,
});

export const roomCallSuccess = data => ({
    type: nameConst.ROOM_SUCCESS,
    query: data,
});

export const roomCalFailed = error => ({
    type: nameConst.ROOM_FAILED,
    ...error,
});

export const roomCallSelected = data => ({
    type: nameConst.ROOM_SELECTED,
    room: data,
});

export const roomCallSelectedSuccess = data => ({
    type: nameConst.ROOM_SELECTED_SUCCESS,
    room: data,
});

export const roomCallSelectedFailed = error => ({
    type: nameConst.ROOM_SELECTED_FAILED,
    ...error,
});

export const roomUpdateCall = (mutate, params) => ({
    type: nameConst.ROOM_UPDATE_CALL,
    mutation: mutate,
    params: params,
});

export const roomUpdatedSuccess = data => ({
    type: nameConst.ROOM_UPDATED_SUCCESS,
    query: data,
});

export const roomUpdatedFailed = error => ({
    type: nameConst.ROOM_UPDATED_FAILED,
    ...error,
});
